<template>

Login
<div v-if="store.state.currentUser.isLoggedIn">
  <div>{{authUser.displayName}}</div>
  <img :src="authUser.photoURL"/>
</div>


</template>
<script>
import {store} from "@/store/store";

export default {
  data(){
    return {
      authUser: store.state.currentUser.fireBaseUser
    }
  }
}



</script>