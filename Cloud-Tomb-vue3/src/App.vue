<template>
  <AppHeader/>
  <div class="w-full flex">
    <router-view></router-view>
  </div>

</template>

<script>
import AppHeader from './components/AppHeader'
import firebase from "@/utilities/firebase";
import {store} from "@/store/store";

export default {
  components: { AppHeader },
  // data(){
  //   return {
  //     currentUser:store.currentUser
  //   }
  // },

  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        store.loginUser(user);
        console.log(user)
      }
    });
  }
}
</script>

