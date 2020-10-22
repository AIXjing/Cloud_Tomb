<template>
  <nav
      class="w-full bg-teal-800 text-white
      px-4 py-2"
  >
    <router-link v-for="item in list" :key="item.to"
                 class="mx-4" :to="item.to"> {{ item.title }} </router-link>
    <button class="mx-4"> Log in </button>

  </nav>
</template>

<script>
export default {
  data(){
    return {
      list:[
        {title: "Home", to: "/"},
        {title: "Calendar", to: "/calendar"},
        {title: "Heros", to: "/heros"},
        {title: "Slider Carousel", to: "/slider"},

      ]
    }
  }
}

</script>