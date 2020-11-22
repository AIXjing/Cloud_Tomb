import {reactive, computed} from "vue";
import axios from "axios";
import router from "@/router";
import firebase from "@/utilities/firebase";

// this is like my private notebook, and I want to share only some of information to others.
// In order to do that, I can only allow others to read my notebook through a "computed" value.
// "Computed" means the information I give to you but also notify when it's updated.
// Also, when others want to change the content of my notebook, they need to do it via "updateXXX" method.
const state = reactive({
    isLoggedIn: false,
    currentUser: newCurrentUser(),
    fireBaseUser: null, // name, (birthday), profile url <- from google firebase auth
    randomUser: {
        firstName: "",
        lastName: "",
        birthday: "",
        inscription: "",
        like: 0,
    }
})

function newCurrentUser() {
    return {
        inscription: "",
        birthday: "",
        firstName: "",
        lastName: "",
        bucketNum: "",
        like: 0,
    }
}

// DO not use state directly!!!!!!!!!!!!!!!!!!!!!!!!!!!

function loginUser(user) {
    state.isLoggedIn = true;
    state.fireBaseUser = user;
    // https://firebase.google.com/docs/auth/admin/custom-claims
    axios.get('https://cloud-tomb.firebaseio.com/users/' + user.uid + '.json')
        .then(dbUser => {
            if (dbUser.data !== null) {
                state.currentUser = dbUser.data
                // console.log(user.uid)
            }
        })
        .catch(error => console.log(error))
}

function logoutUser() {
    state.isLoggedIn = false;
    state.fireBaseUser = null;
    state.currentUser = newCurrentUser();
}

function submitTomb(user) {
    if (!state.isLoggedIn) {
        router.push({path: '/'})
        return
    }

    state.currentUser = user
    state.currentUser.bucketNum = Math.floor((Math.random() * 1000000))

    firebase.auth().currentUser.getIdTokenResult(/* forceRefresh */ true).then(function (idTokenResult) {
        console.log(idTokenResult)
        // We have user's claims here if we want to use it.
        let idToken = idTokenResult.token
        axios.put('https://cloud-tomb.firebaseio.com/users/' + state.fireBaseUser.uid + '.json?auth=' + idToken,
            state.currentUser
        )
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }).catch(function (error) {
        console.log(error)
    });
}

function updateRandomTomb() {
    axios.get('https://cloud-tomb.firebaseio.com/users.json?orderBy="bucketNum"&startAt=' +
        Math.floor((Math.random() * 1000000))
        + '&limitToLast=9&print=pretty')
        .then(res => {
            state.randomUsers = res.data
            // console.log(state.randomUsers)
            // console.log(randomUsers)
        })
        .catch(error => console.log(error))
}

const isLoggedIn = computed(() => state.isLoggedIn)
const currentUser = computed(() => state.currentUser)
const firebaseUser = computed(() => state.fireBaseUser)
const randomUsers = computed(() => state.randomUsers)

function isTombCreated() {
    if (state.currentUser.inscription) {
        return true
    } else {
        return false
    }
}

export const store = {
    loginUser,
    logoutUser,
    // updateBirthday,
    submitTomb,
    updateRandomTomb,
    isLoggedIn,
    currentUser,
    firebaseUser,
    randomUsers,
    isTombCreated,

};