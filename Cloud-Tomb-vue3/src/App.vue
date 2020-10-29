<template>
  <AppHeader
      :isLoggedIn="isLoggedIn"
      @open-login-modal="isLoginOpen = true"
  />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen=false"/>
  <div>{{authUser.displayName}}</div>
  <img :src="authUser.photoURL"/>
</template>

<script>
import AppHeader from './components/AppHeader'
import LoginModal from "@/components/LoginModal"
import firebase from "@/utilities/firebase"
import {store} from "@/store/store";

export default {
  components: { AppHeader, LoginModal },

  data() {
    return {
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: {},
    }
  },

  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
        this.authUser = user;
      } else {
        this.isLoggedIn = false;
        this.authUser = {};
      }
    });
  },

  provide: {
    store
  }
}
</script>

