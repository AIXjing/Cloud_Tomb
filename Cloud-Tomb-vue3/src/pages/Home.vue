<template>
  <div class="container">
    <h1>Welcome to Cloud Tomb</h1>
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-4">
        <div id="logincomponent">
          <LoginComponent @open-login-modal="isLoginOpen = true" @open-signup-modal="isSignupOpen=true"/>
        </div>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8">
        <div id="tombview">
          <TombView/>
        </div>
      </div>
    </div>

    <SignupModal v-if="isSignupOpen" @close-signup="isSignupOpen=false"/>
    <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen=false"/>
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