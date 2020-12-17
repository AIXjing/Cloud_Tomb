import {createApp} from 'vue'
import App from './App.vue'
import "./assets/style.css"
import router from './router'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import './custom.scss'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

//import Vue from 'vue'
// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

// // Install BootstrapVue
// Vue.use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(BootstrapVueIcons)

// https://ourcodeworld.com/articles/read/1363/vue-3-and-vue-bootstrap-error-uncaught-typeerror-cannot-read-property-prototype-of-undefined

const app = createApp(App)
app.use(router)
// app.use(BootstrapVue)
// app.use(IconsPlugin)
app.mount('#app')