use std::env;
use warp::Filter;

#[tokio::main]
async fn main() {
    if env::var_os("RUST_LOG").is_none() {
        // Set `RUST_LOG=name=debug` to see debug logs, this only shows access logs.
        env::set_var("RUST_LOG", "site,fallback");
    }

    pretty_env_logger::init();

    let site = warp::fs::dir("dist").with(warp::log("site"));
    let fallback = warp::any()
        .and(warp::fs::file("dist/index.html"))
        .with(warp::log("fallback")); // https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
    let routes = site.or(fallback);


    warp::serve(routes).run(([0, 0, 0, 0], 3030)).await;
}
