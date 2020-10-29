<template>

Login
<div v-if="store.state.currentUser.isLoggedIn">
  <div>{{authUser.displayName}}</div>
  <img :src="authUser.photoURL"/>
</div>


</template>
<script>
export default {
    inject: ["store"],
  data(){
    return {
      authUser: this.store.state.currentUser.fireBaseUser
    }
  }
}



</script>