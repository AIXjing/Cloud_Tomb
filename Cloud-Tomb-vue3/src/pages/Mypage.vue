<template>
  <div id="main-content" class="container">
    <h1>Welcome to Cloud Tomb</h1>
    <div id="logincomponent-mypage">
        <LoginComponent/>
    </div>

    <SignupModal v-if="isSignupOpen" @close-signup="isSignupOpen=false"/>
    <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen=false"/>
  </div>
</template>

<script>
import LoginComponent from "@/components/LoginComponent"
import LoginModal from "@/components/FirebaseAuth/LoginModal"
import SignupModal from "@/components/FirebaseAuth/SignupModal"


export default {
  components: {LoginComponent, LoginModal, SignupModal},

  data() {
    return {
      isLoginOpen: false,
      isSignupOpen: false,
    }
  },
}

</script>