<template>
  <form
      v-if="!isSubmitted"
      class="w-auto m-auto"
      @submit.prevent="submittomb()"
  >
    <h1 class="text-2xl text-center m-4"> Tomb for yourself </h1>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-1/2 px-3 mb-6 mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          First Name
        </label>
        <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-model="currentUser.firstName"
            placeholder="Your name"
        />
        <p class="text-red-500 text-xs italic"> Please fill out this field.</p>
      </div>

      <div class="w-1/2 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Last Name
        </label>
        <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            v-model="currentUser.lastName"
            placeholder="Write your inscription here"
        />
      </div>
    </div>
    <div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full w-auto px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            The words you want to leave after you die.
          </label>
          <textarea
              v-model="currentUser.inscription"
              class="overflow-auto appearance-none block w-full h-64 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:bg-white focus:border-gray-500"
          />
        </div>
      </div>
    </div>

    <button class="flex border rounded p-2 m-auto" type="submit">Submit</button>
  </form>
</template>

<script>
import {store} from "@/store/store"
import router from "../router";

export default {
  data() {
    return {
      isSubmitted: false,
      currentUser: store.currentUser,
    }
  },
  methods: {
    submittomb() {
      store.submitTomb(this.currentUser)
      this.isSubmitted = true
      router.push({path: '/'})
    },
  }

}


</script>