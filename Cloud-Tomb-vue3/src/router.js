import { createRouter, createWebHistory } from 'vue-router'
import Calendar from "@/pages/Calendar"
import Home from "@/pages/Home"
import Makeyourowntomb from "./pages/makeyourowntomb";
import Cloudtombs from "./pages/cloudtombs";

const routes = [
    {path: '/', component: Home},
    {path: '/makeyourowntomb', component: Makeyourowntomb},
    {path: '/calendar', component: Calendar},
    {path: '/cloudtombs', component: Cloudtombs}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router