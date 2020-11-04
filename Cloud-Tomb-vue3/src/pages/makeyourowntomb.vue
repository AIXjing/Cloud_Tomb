<template>
<div class="m-auto">
  <h1 class="text-2xl text-center "> Tomb for yourself </h1>
    <form
        v-if="!isSubmitted"
        class="" @submit.prevent="submittomb()">
<!--      <div class="flex justify-between">-->
<!--        <label> Your name </label>-->
<!--        <input-->
<!--            class="border rounded-lg"-->
<!--            v-model="user.name"-->
<!--            placeholder="Your name"-->
<!--        />-->
<!--      </div>-->

      <label class="flex justify-between"> Write down your tomb text </label>
      <textarea
          class="border rounded-lg"
          v-model="text"
          placeholder="Write your inscription here"
      />

      <button class="flex border rounded" type="submit">Submit</button>
      kkk
    </form>

<!--  <div v-if="isSubmitted">-->
<!--    <label class="flex justify-between"> Your words to the future world </label>-->
<!--    <label class="flex justify-between"> {{ text }} </label>-->
<!--  </div>-->
</div>



</template>

<script>
import { store } from "@/store/store"
import router from "../router";

export default {
  data() {
    return {
      text: '',
      isSubmitted: false,
    }
  },
  methods: {
    submittomb() {
      store.submitTombText(this.text)
      this.isSubmitted = true
      router.push({ path: '/' })
    },
  },



}

</script>