import {createRouter, createWebHistory} from 'vue-router'
import Calendar from "@/pages/Calendar"
import Home from "@/pages/Home"
import Makeyourowntomb from "./pages/makeyourowntomb";
import Cloudtombs from "./pages/cloudtombs";
import {store} from "@/store/store";

const routes = [
    {path: '/', component: Home},
    {
        path: '/makeyourowntomb',
        component: Makeyourowntomb,
        meta: {requireAuth: true}
    },
    {path: '/calendar', component: Calendar},
    {path: '/cloudtombs', component: Cloudtombs},

]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {
        console.log("a")
        console.log(store.isUserLoggedIn())
        if (!store.isUserLoggedIn()) {
            next({path: '/'});
        } else {
           next();
        }
    } else {
        next();
    }
})

export default router