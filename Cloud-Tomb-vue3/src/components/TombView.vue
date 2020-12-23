<template>

  <!--   show random tombs from database-->
  <div class="container">
    <section class="row" v-if="randomUsers">
      <div
          v-for="[userId, randomUser] of Object.entries(randomUsers)" :key="userId"
          @click="open(userId)"
          class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
        <div id="single-tomb-box">
          <div id="single-tomb">
            <div id="tomb-lastname">
              {{ randomUser.lastName }}
            </div>
            <div id="tomb-birthday">
              {{ randomUser.birthday }}
            </div>
            <div id="tomb-inscription">
              "{{ randomUser.inscription }}"
            </div>
          </div>
          <!--        <button z-20 class="border m-1">like</button>-->
        </div>
      </div>
    </section>
  </div>
</template>
<script>

import {store} from "@/store/store";
import router from "@/router"

export default {
  data() {
    return {
      randomUsers: store.randomUsers,
      // currentUser: store.currentUser,
    }
  },

  mounted() {
    store.updateRandomTomb()
  },

  methods: {
    open: function (userId) {
      // https://router.vuejs.org/guide/essentials/navigation.html
      router.push({name: 'userTomb', params: {userId}})
    }
  },
}
// }


</script>