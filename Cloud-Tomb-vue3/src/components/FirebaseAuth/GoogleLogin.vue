<template>
  <section class="my-5 text-center text-xl">
    <button
        class="border rounded px-2 bg-pink-300"
        @click="loginWithGoogle"
    > Login With Google
    </button>
  </section>
</template>

<script>

import firebase from "@/utilities/firebase"

export default {
  methods: {
    loginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
          .auth()
          .signInWithPopup(provider)
          .then(() => {
            this.$emit("close-login-from-google");
          });
    }
  }
}

</script>