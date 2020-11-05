<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center "> Your tomb </h1>
      <!--      <div class="flex justify-between">-->
      <!--        <label> Your name </label>-->
      <!--        <input-->
      <!--            class="border rounded-lg"-->
      <!--            v-model="user.name"-->
      <!--            placeholder="Your name"-->
      <!--        />-->
      <!--      </div>-->

      <label class="flex justify-between"> Inscription </label>
      <div class="border-2">
        <input v-model="currentUser.tombText" class="input"/>
      </div>
      <button @click="updateInscript"> Save</button>

      <!--      <button class="flex border rounded" type="submit">Submit</button>-->
  </div>
</template>

<script>
import {store} from "@/store/store"
import router from "../router";

export default {
  data() {
    return {
      currentUser: store.currentUser,
      // isSaved: false,
    }
  },
  methods: {
    // we could add a function that only memberships can edit their tombs unlimited,
    // while other users can only edite their tombs once.
    updateInscript: function () {
      console.log(this.currentUser.tombText)
      store.submitTombText(this.currentUser.tombText)
      // this.isSaved = true
      router.push('/')
    },
  }

}


</script>