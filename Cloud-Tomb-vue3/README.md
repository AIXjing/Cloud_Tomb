# vue3

## Project setup
```
npm install
```

## Start Vue UI
```
vue ui
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Create router
##### npm install vue-route@next (remember to be in the right directory)
#### create router.js in src
    #import { createRouter, createWebHistory } from 'vue-router'```
    # import routers from directory
    
    #const routes = [
        {path: '/', component: Home},
        ...
    ]
    
    #const rounter - createRouter({
        history: createWebHistory(),
        routes
    })
        
    #export default router
    
#### use router in main.js
    # import router from './router'
    # const app = createApp(App)
         app.use(router)
         app.mount('#app')
       
#### use router in App.vue
    # <router-view></router-view>
    
#### use router in AppHeader.vue
    # <router-link></router-link>   
    
#### npm install vue-router


## install firebase (using module bundlers)
   npm install --save firebase
   import * as firebase from "firebase/app";
   import "firebase/analytics";
   import "firebase/auth";
  const firebaseConfig = {
    // ...
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase
  
  
  
  
 ## vue3-datapicker-lite
 https://linmasahiro.github.io/vue3-datepicker-lite/dist/
 