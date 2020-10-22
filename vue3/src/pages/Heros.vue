<template>

  <div class="m-auto">
    <h1 class="text-2xl text-center"> My Heros </h1>
    <ul>
      <li class="flex justify-between" v-for="(hero,index) in heros" :key="hero.name">
        <div>
          {{ hero.name }}
        </div>
        <button @click="remove(index)"> x</button>
      </li>
    </ul>

    <form class="mt-10" @submit.prevent="addHero()">
      <input
          class="border rounded-lg"
          v-model="newhero"
          placeholder="Type new Hero!"
      />
      <button class="border rounded" type="submit">Add Hero</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heros: [
        {name: "Fuyang Baby"},
        {name: "Wonder Jing"},
        {name: "Fector"},
        {name: "Fugo"}
      ],
      newhero: "",
      // fname: "Sar",
      // lname: "Shri",
      attribute: "value",
      isDisable: false,
    }
  },
  methods: {
    addHero() {
      if (this.newhero == "") {
        alert("Type hero name!");
        return
      }
      this.heros.push({name: this.newhero});
      this.newhero = '';
    },
    remove(index) {
      this.heros = this.heros.filter((hero, i) => i !== index)
    }
    // randM() {
    //   return Math.random();
    // },
    // setFullName(){
    //   this.fullname = 'Bitfumes Tutorial'
    // }
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