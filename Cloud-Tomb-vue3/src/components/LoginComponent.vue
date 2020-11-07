<template>
  <div>
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
              class="text-l text-gra
          >y-700">
            Sign up
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="text-2xl"> Hello,</div>
      <div v-if="firebaseUser.displayName != null">
        <img :src="firebaseUser.photoURL"/>
        <div>{{ firebaseUser.displayName }}</div>
      </div>
      <div v-else>
        <img class="object-fit object-center mx-auto bg-gray-400 h-18 w-16"
             src="@/assets/Culture-Grumpy-Cat-487386121-2.jpg">
        <div> {{ firebaseUser.email }}</div>
      </div>

      <div>{{ currentUser.inscription }}</div>

      <div v-if="!currentUser.inscription">
        <button class="border bg-pink-100">
          <router-link class="mx-4" to="/makeyourowntomb"> Make your own tomb!</router-link>
        </button>
      </div>
      <div v-else>
        <button class="border bg-pink-100">
          <router-link class="mx-4" to="/makeyourowntomb"> Edit your own tomb!</router-link>
        </button>
      </div>
      <div>
        <button @click="logout"> Log out</button>
      </div>
    </div>


  </div>

</template>
<script>
import {store} from "@/store/store"
import firebase from "@/utilities/firebase"


export default {
  data() {
    console.log("log in? -> " + store.isLoggedIn)
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