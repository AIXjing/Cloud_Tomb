import { createRouter, createWebHistory } from 'vue-router'
import Heros from '@/pages/Heros'
import Calendar from "@/pages/Calendar"
import Home from "@/pages/Home"
import Slider from "@/pages/Slider";

const routes = [
    {path: '/', component: Home},
    {path: '/heros', component: Heros},
    {path: '/calendar', component: Calendar},
    {path: '/slider', component: Slider}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router