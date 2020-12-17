<template>
  <AppHeader/>
  <router-view></router-view>

</template>

<script>
import AppHeader from './components/AppHeader'
import firebase from "@/utilities/firebase";
import {store} from "@/store/store";

export default {
  components: {AppHeader},

  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        store.loginUser(user)
      }
    });
  }
}
</script>

