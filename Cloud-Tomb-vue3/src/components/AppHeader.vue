<template>
  <nav
      class="w-full bg-teal-800 text-white
      px-4 py-2 flex justify-between"
  >
    <router-link v-for="item in list" :key="item.to"
                 class="mx-4" :to="item.to"> {{ item.title }} </router-link>

    <button v-if="isLoggedIn" class="mx-4" @click="logout"> Log out </button>
    <button v-else class="mx-10" @click="$emit('open-login-modal')"> Log in </button>
  </nav>
</template>

<script>
import firebase from "@/utilities/firebase"
import { store } from "@/store/store"

export default {
  props: {
    isLoggedIn: Boolean,
  },

  data(){
    return {
      list:[
        {title: "Home", to: "/"},
        {title: "Calendar", to: "/calendar"},
        {title: "Make your own tomb", to: "/makeyourowntomb"},
        {title: "Cloud-Tombs", to: "/cloudtombs"},

      ]
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