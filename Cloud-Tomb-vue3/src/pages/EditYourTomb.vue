<template>
  <form
      class="w-auto m-auto"
      @submit.prevent="submitTomb()"
  >
    <h1 class="text-2xl text-center m-4"> Tomb for yourself </h1>
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-1/2 px-3 mb-2 mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          First Name
        </label>
        <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-model="currentUser.firstName"
            placeholder="Your name"
        />
        <p v-if="currentUser.firstName.length == 0 || currentUser.lastName.length == 0"
           class="text-red-500 text-xs italic"> Please fill out this field.</p>
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


    <!--    TO DO: pick birthday-->
    <div>
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      >
        Birthday
      </label>

      <div class="flex flex-1 mb-6">
        <div class="border border-color-gray rounded">
          <select v-model="birthYear" class="text-gray-700">
            <option disabled value="">Year</option>
            <option v-for="year in years" :key="year">{{ year }}</option>
          </select>
        </div>

        <div class="border border-color-gray rounded">
          <select v-model="birthMonth" class="text-gray-700">
            <option disabled value="">Month</option>
            <option v-for="month in months" :key="month">{{ month }}</option>
          </select>
        </div>

        <div class="border border-color-gray rounded">
          <select v-model="birthDate" class="text-gray-700">
            <option disabled value="">Date</option>
            <template v-if="birthYear % 4 == 0 && birthYear % 100 != 0 && birthMonth == 'Feb' ">
              <option v-for="day in days29" :key="day">{{ day }}</option>
            </template>
            <template v-else-if="birthYear % 4 != 0 && birthMonth == 'Feb' ">
              <option v-for="day in days28" :key="day">{{ day }}</option>
            </template>
            <template
                v-else-if="birthMonth == 'Apr' || birthMonth == 'June' || birthMonth == 'Sep' || birthMonth == 'Nov'">
              <option v-for="day in days30" :key="day">{{ day }}</option>
            </template>
            <template v-else>
              <option v-for="day in days31" :key="day">{{ day }}</option>
            </template>
          </select>
        </div>
      </div>
    </div>

    <div>
      <div class="flex flex-wrap -mx-3 mt-6">
        <div class="w-full w-auto px-3 mt-2">
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

    <div class="mt-4">
      <button class="flex border rounded p-2 m-auto" type="submit">Submit</button>
    </div>
    <!--    <div>-->
    <!--      <b-button>Button</b-button>-->
    <!--      <b-button variant="danger">Button</b-button>-->
    <!--      <b-button variant="success">Button</b-button>-->
    <!--      <b-button variant="outline-primary">Button</b-button>-->
    <!--    </div>-->
  </form>
</template>

<script>
import {store} from "@/store/store"
import router from "../router"

export default {
  data() {
    var years = [];
    var today = new Date()
    var thisYear = today.getFullYear();
    for (var i = thisYear; i >= 1900; i--) {
      years.push(i);
    }
    let months = [];
    for (var z = 1; z <= 12; z++) {
      months.push(z);
    }

    let days28 = [];
    for (var k = 1; k <= 28; k++) {
      days28.push(k);
    }

    let days29 = [];
    for (var l = 1; l <= 29; l++) {
      days29.push(l);
    }

    let days30 = [];
    for (var m = 1; m <= 30; m++) {
      days30.push(m);
    }

    let days31 = [];
    for (var n = 1; n <= 31; n++) {
      days31.push(n);
    }

    return {
      currentUser: store.currentUser,
      days28: days28,
      days29: days29,
      days30: days30,
      days31: days31,
      // months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      months: months,
      years: years,
      birthYear: "",
      birthMonth: "",
      birthDate: "",
    }
  },

  methods: {
    // we could add a function that only memberships can edit their tombs unlimited,
    // while other users can only edite their tombs once.
    submitTomb: function () {
      this.currentUser.birthday = createBirthday(this.birthYear, this.birthMonth, this.birthDate)
      store.submitTomb(this.currentUser)
      // this.isSaved = true
      router.push('/')
    }
  },

  mounted() {
    let birtharray = this.currentUser.birthday.split("-")
    if (birtharray.length === 3) {
      this.birthYear = birtharray[0]
      this.birthMonth = birtharray[1]
      this.birthDate = birtharray[2]
    }
  }
}

function createBirthday(year, month, date) {
  return year + "-" + month + "-" + date;
}


</script>