<template>
  <div>
    <div v-if="!currentUser.isLoggedIn">
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
      <div v-if="currentUser.fireBaseUser.displayName != null ">
        <div>{{ currentUser.fireBaseUser.displayName }}</div>
        <img :src="currentUser.fireBaseUser.photoURL"/>
      </div>
      <div v-else>
        <div> {{ currentUser.fireBaseUser.email }}</div>
<!--        <img class="object-contain src="@/assets/Culture-Grumpy-Cat-487386121-2.jpg">-->
      </div>
      <div v-if="currentUser.tombText == null">
        <button class="border bg-pink-100">
          <router-link class="mx-4" to="/makeyourowntomb"> Make your own tomb!</router-link>
        </button>
      </div>
      <div v-else>
        <button class="border bg-pink-100">
          <router-link class="mx-4" to="/edittombtext"> Edit your own tomb!</router-link>
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
    return {
      currentUser: store.currentUser,
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