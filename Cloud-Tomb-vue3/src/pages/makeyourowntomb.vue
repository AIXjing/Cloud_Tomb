<template>
<div class="m-auto">
  <h1 class="text-2xl text-center "> Tomb for yourself </h1>
    <form
        v-if="!isSubmitted"
        class="" @submit.prevent="submittomb()">
      <div class="flex justify-between">
        <label> Your name </label>
        <input
            class="border rounded-lg"
            v-model="usertomb.name"
            placeholder="Your name"
        />
      </div>

      <label class="flex justify-between"> Wish after your death </label>
      <input
          class="border rounded-lg"
          v-model="usertomb.wish"
          placeholder="Your wish"
      />

      <button class="flex border rounded" type="submit">Submit</button>
    </form>

  <div v-if="isSubmitted">
    <div class="flex justify-between">
      <label> {{usertomb.name}} </label>
    </div>
    <label class="flex justify-between"> Wish after your death </label>
    <label class="flex justify-between"> {{ usertomb.wish }} </label>
  </div>
</div>



</template>

<script>
import { store } from "@/store/store"

export default {
  data() {
    return {
      usertomb: {
        name: '',
        wish: ''
        },
      isSubmitted: false
    }
  },

  methods: {
    submittomb() {
      store.submitTombText(this.usertomb.wish)
      console.log(this.usertomb)
      this.isSubmitted = true
    },
  },

}

</script>