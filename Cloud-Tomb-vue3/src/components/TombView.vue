<template>

  <!--   show random tombs from database-->
  <div>
    Random Tomb:
    <div class="flex">
      <div
          v-for="randomUser in randomUsers" :key="randomUser"
          class="flex.none border-1 text-white m-2 bg-teal-700 box-border h-64 w-1/3 p-2">
        <div class="text-center m-2">
          {{ randomUser.name }}
        </div>
        <div class="text-center m-2">
          {{ randomUser.birthday }}
        </div>
        <div class="text-center m-2">
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
</template>
<script>

import {store} from "@/store/store";

export default {
  data() {
    return {
      randomUsers: store.randomUsers,
    }
  },

  mounted() {
    store.updateRandomTomb()
  }
}

</script>