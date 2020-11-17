import {createRouter, createWebHistory} from 'vue-router'
import Calendar from "@/pages/Calendar"
import Home from "@/pages/Home"
import Cloudtombs from "./pages/cloudtombs";
import {store} from "@/store/store";
import EditYourTomb from "@/pages/EditYourTomb";

const routes = [
    {path: '/', component: Home},
    {
        path: '/editYourTomb',
        component: EditYourTomb,
        meta: {requireAuth: true}
    },
    {path: '/calendar', component: Calendar},
    {path: '/cloudtombs', component: Cloudtombs},
    {name: 'userTomb', path: '/userTomb', component: EditYourTomb} // TODO: use a new page

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