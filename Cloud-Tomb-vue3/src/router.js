import {createRouter, createWebHistory} from 'vue-router'
import Mypage from "@/pages/Mypage"
import Home from "@/pages/Home"
// import Cloudtombs from "./pages/cloudtombs";
import {store} from "@/store/store";
import EditYourTomb from "@/pages/EditYourTomb";
import Usertomb from "@/pages/Usertomb";

const routes = [
    {path: '/', component: Home},
    {
        path: '/editYourTomb',
        component: EditYourTomb,
        meta: {requireAuth: true}
    },
    {path: '/mypage', component: Mypage},
    // {path: '/cloudtombs', component: Cloudtombs},
    {path: '/userTomb/:userId', component: Usertomb, name: 'userTomb'}

]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {
        if (!store.isLoggedIn) {
            next({path: '/'});
        } else {
           next();
        }
    } else {
        next();
    }
})

export default router