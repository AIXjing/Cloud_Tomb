<template>

  <!--   show random tombs from database-->
  <div>
    Cloud Tomb:
    <div class="flex flex-wrap">
      <div
          v-for="randomUser in randomUsers" :key="randomUser"
          class="w-1/3"
      >
        <div class="h-64 m-1 box-border text-white bg-teal-700">
        <div class="text-center m-1">
          {{ randomUser.lastName }}
        </div>
        <div class="text-center m-1">
          {{ randomUser.birthday }}
        </div>
        <div class="text-center m-1">
          "{{ randomUser.inscription }}"
        </div>
      </div>
    </div>

      <!--      <div class="flex.none border-1 text-white m-2 bg-teal-700 box-border h-64 w-1/3 p-2">-->
      <!--        User2's tomb.-->
      <!--        Hello, Denmark.-->
      <!--        It is a nice place.-->
      <!--        I have two cats.-->
      <!--        Hugo is distracting me while I am studying.-->
      <!--      </div>-->
      <!--      <div class="flex.none border-1 text-white m-2 bg-teal-700 box-border h-64 w-1/3 p-2">-->
      <!--        User3's tomb.-->
      <!--      </div>-->
    </div>
  </div>
</template>
<script>

import {store} from "@/store/store";

export default {
  data() {
    return {
      randomUsers: store.randomUsers,
      currentUser: store.currentUser,
    }
  },

  mounted() {
    store.updateRandomTomb()
  }
}

</script>