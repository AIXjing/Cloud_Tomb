<template>
  <nav
      class="w-full bg-teal-800 text-white
      px-4 py-2 flex justify-between"
  >
    <router-link v-for="item in list" :key="item.to"
                 class="mx-4" :to="item.to"> {{ item.title }} </router-link>

  </nav>
</template>

<script>
// import firebase from "@/utilities/firebase"
// import { store } from "@/store/store"

export default {
  // props: {
  //     isLoggedIn: Boolean,
  // },

  data(){
    return {
      list:[
        {title: "Home", to: "/"},
        {title: "Calendar", to: "/calendar"},
        {title: "Cloud-Tombs", to: "/cloudtombs"},
      ]
    }
  },
}

</script>