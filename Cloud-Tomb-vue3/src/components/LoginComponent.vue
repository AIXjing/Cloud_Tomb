<template>
  <div>
    <div v-if="!currentUser.isLoggedIn">
      <div class="text-xl">
        Want to make your own tomb?
      </div>
      <div class="p-2 mt-2">
        <button
            @click="$emit('open-login-modal')"
            class="text-xl text-white flex-1 text-center
            bg-teal-700 border-2 border-gray-500 rounded"
        >
          Log in
        </button>
      </div>
    </div>
    <div v-else>
      <div>{{ currentUser.fireBaseUser.displayName}}</div>
      <img :src="currentUser.fireBaseUser.photoURL"/>
      <button class="border bg-pink-100">
        <router-link class="mx-4" to="/makeyourowntomb"> Creat your own tomb! </router-link>
      </button>
      <div>
      <button @click="logout"> Log out </button>
      </div>
    </div>


  </div>

</template>
<script>
import {store} from "@/store/store"
import firebase from "@/utilities/firebase"


export default {
  data() {
    return {
      currentUser: store.currentUser,
    }
  },
  methods: {
    logout() {
      firebase
          .auth()
          .signOut()
          .then((res) => {res})
          .catch((e) => {e});

      store.logoutUser();
    }
  },
}
</script>