<template>
  <div class="m-auto">
    <div class="flex bg-gray-200">
      <h1 class="text-center">Welcome to Cloud Tomb</h1>
      <div class="text-center">Description: This is Home page, change stuff from here</div>
    </div>

    <div class="flex bg-gray-200">
      <div class="flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        <LoginComponent  @open-login-modal="isLoginOpen = true" @open-signup-modal="isSignupOpen=true"/>
        <SignupModal v-if="isSignupOpen" @close-signup="isSignupOpen=false" />
        <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen=false"/>
      </div>
      <div class="flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        <TombView />
      </div>
    </div>
  </div>

</template>

<script>
import LoginComponent from "@/components/LoginComponent"
import TombView from "@/components/TombView"
import LoginModal from "@/components/FirebaseAuth/LoginModal"
import SignupModal from "@/components/FirebaseAuth/SignupModal"
import {store} from "@/store/store"
import firebase from "@/utilities/firebase"

export default {
  components: {LoginComponent, TombView, LoginModal, SignupModal},

  data() {
    return {
      isLoginOpen: false,
      isSignupOpen: false,
      isSignup: false,
      authUser: {},
      isloggedIn: store.currentUser.isLoggedIn,
    }
  },

  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // this.isLoggedIn = true;
        this.authUser = user;
        store.loginUser(user);
        console.log("login")
      } else {
        // this.isLoggedIn = false;
        this.authUser = {};
      }
    });
  }
}

</script>