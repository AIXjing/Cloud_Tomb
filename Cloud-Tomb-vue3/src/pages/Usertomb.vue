<template>
  <div
      class="m-auto border border border-gray-200 rounded py-3 px-4"
  >
    <h1 class="text-2xl text-center m-4"> Tomb </h1>
    <div class="block tracking-wide font-bold text-xl text-center my-10 ">
       {{ randomUser.firstName }} {{ randomUser.lastName }}
    </div>

    <div> Photo</div>
    <div>
      <label class="block tracking-wide font-bold text-xl text-center my-10"
      >
        From {{ randomUser.birthday }} to now
      </label>
    </div>
    <div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full w-auto px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            He/She wants to tell you that
          </label>
          <textarea
              v-model="randomUser.inscription"
              class="overflow-auto appearance-none block w-full h-64 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:bg-white focus:border-gray-500"
          />
        </div>
      </div>
    </div>

    <button
        v-if="isLiked"
        class="flex border rounded bg-gray-500 p-2 m-auto" @click="changeLike()"> Liked {{
        Object.keys(randomUser.like).length
      }}
    </button>
    <button
        v-else
        class="flex border rounded p-2 m-auto" @click="changeLike()"> Like {{
        Object.keys(randomUser.like).length
      }}
    </button>

    <!--    <div>-->
    <!--      <b-button>Button</b-button>-->
    <!--      <b-button variant="danger">Button</b-button>-->
    <!--      <b-button variant="success">Button</b-button>-->
    <!--      <b-button variant="outline-primary">Button</b-button>-->
    <!--    </div>-->
  </div>
</template>

<script>
// import {store} from "@/store/store"
// import router from "../router"
import axios from "axios";
import firebase from "@/utilities/firebase";
import {store} from "@/store/store";

export default {
  data() {
    return {
      randomUser: {
        like: {}
      },
      firebaseUser: store.firebaseUser
    }
  },

  // Once the page is refreshed, data cannot be immediately passed. Thus, this.firebaseUser = null.
  // After a while, firebaseUser data has been passed. So isLiked has been called twice.
  computed: {
    isLiked() {
      if (this.firebaseUser == null) {
        return false
      }
      return this.firebaseUser.uid in this.randomUser.like
    }
  },

  methods: {
    changeLike() {
      // cannot use 'this' in 'firebase.auth().currentUser....', so we need to define another variables ahead in the method.
      let randomUser = this.randomUser;
      let isLiked = this.isLiked;
      firebase.auth().currentUser.getIdTokenResult(/* forceRefresh */ true).then(function (idTokenResult) {
        let idToken = idTokenResult.token;

        if (!isLiked) {
          randomUser.like[firebase.auth().currentUser.uid] = 1
          axios.put('https://cloud-tomb.firebaseio.com/users/' + randomUser.userId + '/like/' + firebase.auth().currentUser.uid + '.json?auth=' + idToken,
              1
          )
              .then((response) => {
                console.log(response)
              })
              .catch((error) => {
                console.log(error)
              });
        } else {
          delete randomUser.like[firebase.auth().currentUser.uid]
          axios.delete('https://cloud-tomb.firebaseio.com/users/' + randomUser.userId + '/like/' + firebase.auth().currentUser.uid + '.json?auth=' + idToken
          ).then((response) => {
            console.log(response)
          }).catch((error) => {
            console.log(error)
          });
        }
      }).catch(function (error) {
        console.log(error)
      });

    }
  },

  mounted() {
    axios.get('https://cloud-tomb.firebaseio.com/users/' + this.$route.params.userId + '.json')
        .then(dbUser => {
          if (dbUser.data !== null) {
            this.randomUser = dbUser.data
            this.randomUser.userId = this.$route.params.userId
            console.log(this.randomUser.like)

            if (!('like' in this.randomUser)) {
              this.randomUser.like = {};
            }
          }
        })
        .catch(error => console.log(error))
  }
}
</script>