<template>
  <div v-if="!isLoggedIn">
    <div class="text-xl">
      Want to make your own tomb?
    </div>
    <div class="p-2 mt-2">
      <button
          @click="$emit('open-login-modal')"
          class="flex-1 text-xl text-white text-center
            bg-teal-700 border-2 border-gray-500 rounded"
      >
        Log in
      </button>
      <div class="flex-1">
        <button
            @click="$emit('open-signup-modal')"
            class="text-l text-gray-700"
        >
          Sign up
        </button>
      </div>
    </div>
  </div>
  <div v-else class="profile-content">
    <!--      <div> Hello,</div>-->
    <div v-if="firebaseUser.displayName">
        <img class="user-photo" :src="firebaseUser.photoURL"/>
      <div class="user-name"> {{ firebaseUser.displayName }}</div>
    </div>
    <div v-else>
      <img class="user-photo" src="@/assets/Culture-Grumpy-Cat-487386121-2.jpg">
      <!--        class="object-fit object-center mx-auto bg-gray-400 h-18 w-16"-->
      <div class="user-name"> {{ firebaseUser.email }}</div>
    </div>

    <div v-if="!currentUser.inscription">
      <button class="edit-tomb-button">
        <router-link class="user-button-text" to="/editYourTomb"> Create your own tomb!</router-link>
      </button>
    </div>
    <div v-else>
      <button class="edit-tomb-button">
        <router-link class="user-button-text" to="/editYourTomb"> Edit your own tomb!</router-link>
      </button>
    </div>
    <div id="logout" >
      <button @click="logout"> Log out</button>
    </div>
  </div>
</template>
<script>
import {store} from "@/store/store"
import firebase from "@/utilities/firebase"


export default {
  data() {
    // console.log(store.currentUser)
    return {
      currentUser: store.currentUser,
      firebaseUser: store.firebaseUser,
      isLoggedIn: store.isLoggedIn
    }
  },
  methods: {
    logout() {
      firebase
          .auth()
          .signOut()
          .then((res) => {
            res
          })
          .catch((e) => {
            e
          });

      store.logoutUser();
    }
  },
}
</script>