use serde_derive::{Deserialize, Serialize};
use std::collections::HashMap;
use std::env;
use std::sync::Mutex;
use warp::Filter;

#[macro_use]
extern crate lazy_static;
lazy_static! {
    // {"user1": "My life is good"}
    static ref TOMBTEXT_MAP: Mutex<HashMap<String, String>> = {
        let mut m = HashMap::new();
        m.insert("user1".into(), "My life is good".into());
        Mutex::new(m)
    };
}

#[derive(Deserialize, Serialize, Clone)]
struct TombTextData {
    #[serde(rename = "tombText", alias = "text")]
    text: String,
}

impl TombTextData {
    fn into_text(self) -> String {
        self.text
    }
}

#[tokio::main]
async fn main() {
    if env::var_os("RUST_LOG").is_none() {
        // Set `RUST_LOG=logger_name1=debug,logger_name2=info` to see debug logs, this only shows access logs.
        env::set_var("RUST_LOG", "cloud_tomb=info");
    }

    pretty_env_logger::init();

    let site = warp::get()
        .and(warp::fs::dir("dist"))
        .with(warp::log("site"));
    let fallback = warp::get()
        .and(warp::fs::file("dist/index.html"))
        .with(warp::log("fallback")); // https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations

    // curl -X POST -H "Content-Type:application/json" localhost:3030/api/tombtext/user1 -d '{"tombText": "my life is very peaceful"}'
    let save_tomb_text = warp::post()
        .and(warp::path("api").and(warp::path("tombtext")))
        .and(warp::path::param::<String>())
        .and(warp::body::content_length_limit(1024 * 32).and(warp::body::json()))
        .map(|user_id: String, data: TombTextData| {
            TOMBTEXT_MAP
                .lock()
                .unwrap()
                .insert(user_id.clone(), data.into_text());
            format!("{{ \"result\": {}'s text saved }}", user_id)
        })
        .with(warp::log("save_tomb_text"));

    // curl curl -X GET localhost:3030/api/tombtext/user1
    let get_tomb_text = warp::get()
        .and(warp::path("api").and(warp::path("tombtext")))
        .and(warp::path::param::<String>())
        .map(|user_id: String| {
            let text = TOMBTEXT_MAP
                .lock()
                .unwrap()
                .get(&user_id)
                .map(|s| s.clone())
                .unwrap_or("Write your tomb text here".into());
            warp::reply::json(&TombTextData { text })
        })
        .with(warp::log("get_tomb_text"));

    let routes = site
        .or(get_tomb_text)
        .or(save_tomb_text)
        .or(fallback)
        .with(warp::log("cloud_tomb"));

    warp::serve(routes).run(([0, 0, 0, 0], 3030)).await;
}
