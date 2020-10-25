<template>
  <section
      @click="close"
      class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
  ></section>
  <div class="absolute  inset-0">
    <div class="flex h-full">
      <div class="z-20 m-auto bg-white p-2 rounded shadow w-1/3">

        <div class="p-2 border">
          <h1 class="text-2xl text-center">Login</h1>
          <GoogleLogin @close-login-from-google="close" />


          <p class="my-2 text-center"> Or </p>

          <form class="p-2 my-2" @submit.prevent="submit">
            <div class="my-2">
              <label>Email or Username</label>
              <input
                  v-model="email"
                  class="rounded shadow p-2 w-full"
                  placeholder="Enter your email or username"
                  ref="emailinputbox"
              />
            </div>

            <div class="my-2">
              <label>Password</label>
              <input
                  v-model="password"
                  class="rounded shadow p-2 w-full"
                  type="password"
                  placeholder="Enter your password"
                  ref="passwordinputbox"
              />
            </div>

            <div class="my-2">
              <button
                  class="w-full rounded rounded shadow-md bg-teal-500 text-white p-2"
                  type="submit"
              >
                <span v-if="!isLoading"> Log in </span>
                <span v-else> Loading... </span>
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import firebase from '@/utilities/firebase'
import GoogleLogin from "@/components/Login/GoogleLogin";

export default {
  components: {GoogleLogin},
  data() {
    return {
      email: 'abc123@gmail.com',
      password: 'abc123',
      isLoading: false,
    }
  },
  methods: {
    submit() {
      this.isLoading = true;
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.email = '';
            this.password = '';
            this.isLoading = false;
            this.close();
          })
          .catch((e) => {
            console.log(e);
            this.isLoading = false
          })

    },
    close() {
      this.$emit("close-login");
    },

  },


  mounted() {
    this.$refs.emailinputbox.focus();
    this.$refs.passwordinputbox.focus();
  }
}


</script>