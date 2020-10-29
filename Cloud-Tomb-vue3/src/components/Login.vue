<template>

Login
<div v-if="currentUser.isLoggedIn">
  <div>{{currentUser.fireBaseUser.displayName}}</div>
  <img :src="currentUser.fireBaseUser.photoURL"/>
</div>


</template>
<script>
import {store} from "@/store/store";

export default {
  data(){
    console.log("hello")
    console.log(store)
    return {
      currentUser: store.currentUser

    }
  }
}



</script>