<template>

  Login
  <div v-if="currentUser.isLoggedIn">
    <div>{{ currentUser.fireBaseUser.displayName }}</div>
    <img :src="currentUser.fireBaseUser.photoURL"/>

    <button class="border bg-pink-100">
      <router-link class="mx-4" to="/makeyourowntomb"> Creat your own tomb!</router-link>
    </button>

  </div>


</template>
<script>
import {store} from "@/store/store";

export default {
  data() {
    console.log("hello")
    console.log(store)
    return {
      currentUser: store.currentUser

    }
  }
}


</script>