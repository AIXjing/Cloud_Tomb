<template>
  <div>
    <LoginModal v-if="!currentUser.isLoggedIn"/>
    <div v-else>
      <div>{{ currentUser.fireBaseUser.displayName }}</div>
      <img :src="currentUser.fireBaseUser.photoURL"/>
      <button class="border bg-pink-100">
        <router-link class="mx-4" to="/makeyourowntomb"> Creat your own tomb!</router-link>
      </button>
    </div>

  </div>

</template>
<script>
import {store} from "@/store/store";
import LoginModal from "./LoginModal";


export default {
  components: {LoginModal},
  data() {
    // console.log("hello")
    // console.log(store)
    return {
      currentUser: store.currentUser
    }
  },
}
</script>