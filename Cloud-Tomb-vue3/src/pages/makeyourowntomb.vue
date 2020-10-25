<template>
<div class="m-auto">
  <h1 class="text-2xl text-center "> Tomb for yourself </h1>
    <form
        v-if="!isSubmitted"
        class="" @submit.prevent="submittomb()">
      <div class="flex justify-between">
        <labe> Your name </labe>
        <input
            class="border rounded-lg"
            v-model="usertomb.name"
            placeholder="Your name"
        />
      </div>

      <labe class="flex justify-between"> Wish after your death </labe>
      <input
          class="border rounded-lg"
          v-model="usertomb.wish"
          placeholder="Your wish"
      />

      <button class="flex border rounded" type="submit">Submit</button>
    </form>

  <div v-if="isSubmitted">
    <div class="flex justify-between">
      <labe> {{usertomb.name}} </labe>
    </div>
    <labe class="flex justify-between"> Wish after your death </labe>
    <label class="flex justify-between"> {{ usertomb.wish }} </label>
  </div>
</div>



</template>

<script>
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
      console.log(this.usertomb)
      this.isSubmitted = true
    },
  },

  computed: {
    herosCount() {
      return this.heros.length
    },
    // randC() {
    //   return Math.random()
    // },
    // fullname: {
    //   get() {
    //     return `The fullname is ${this.fname} ${this.lname}`
    //   },
    //   set(fullname) {
    //     const values = fullname.split(" ");
    //     this.fname = values[0];
    //     this.lname = values[1];
    //   },
    // },
  }
}

</script>