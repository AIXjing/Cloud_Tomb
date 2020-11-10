<template>
  <div class="w-full">
    <!--        </div>-->
    <div class="flex flex-col bg-gray-200">
      <div class="bg-gray-200">
        <h1 class="text-center">Welcome to Cloud Tomb</h1>
      </div>
      <div class="flex">
        <div class="flex-none text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          <LoginComponent @open-login-modal="isLoginOpen = true" @open-signup-modal="isSignupOpen=true"/>
        </div>
        <div class="flex-1 text-gray-700 text-center bg-gray-400 px-10 py-2 m-2">
          <TombView/>
        </div>
      </div>
    </div>
  </div>
  <SignupModal v-if="isSignupOpen" @close-signup="isSignupOpen=false"/>
  <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen=false"/>
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