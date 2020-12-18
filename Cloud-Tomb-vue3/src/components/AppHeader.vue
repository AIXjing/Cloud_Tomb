<template>
  <nav class="nav-style">
    <div>
      <router-link v-for="item in list" :key="item.to" :to="item.to"> {{ item.title }}</router-link>
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
      list: [
        {title: "Home", to: "/"},
        // {title: "Calendar", to: "/calendar"},
        // {title: "Cloud-Tombs", to: "/cloudtombs"},
      ]
    }
  },
}

</script>