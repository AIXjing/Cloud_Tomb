<template>
  <nav class="nav-style">
    <div>
      <router-link :to="{path: '/'}"> Home </router-link>
    </div>
    <div id="nav-mypage">
      <router-link :to="{path: '/Mypage'}"> My page </router-link>
    </div>
  </nav>
</template>

<script>
// import firebase from "@/utilities/firebase"
// import { store } from "@/store/store"

export default {
  // props: {
  //     isLoggedIn: Boolean,
  // },

  data() {
    return {
      // list: [
      //   {title: "Home", to: "/"},
      //   {title: "My page", to: "/Mypage"},
        // {title: "Cloud-Tombs", to: "/cloudtombs"},
      // ]
    }
  },
}

</script>