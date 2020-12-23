<template>
  <div id="main-content" class="container">
    <h1>Welcome to Cloud Tomb</h1>
    <div class="row">
      <div class="col-xl-3 col-lg-3">
          <LoginComponent id="logincomponent" @open-login-modal="isLoginOpen = true" @open-signup-modal="isSignupOpen=true"/>
      </div>
      <div class="col-xl-9 col-lg-9">
          <TombView id="tombview-component"/>
      </div>

      <SignupModal v-if="isSignupOpen" @close-signup="isSignupOpen=false"/>
      <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen=false"/>
    </div>
  </div>
</template>

<script>
import LoginComponent from "@/components/LoginComponent"
import TombView from "@/components/TombView"
import LoginModal from "@/components/FirebaseAuth/LoginModal"
import SignupModal from "@/components/FirebaseAuth/SignupModal"
// import firebase from "@/utilities/firebase"


export default {
  components: {LoginComponent, TombView, LoginModal, SignupModal},

  data() {
    return {
      isLoginOpen: false,
      isSignupOpen: false,
    }
  },
}

</script>