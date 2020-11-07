
import { reactive, computed} from "vue";
import axios from "axios";
import router from "@/router";

// this is like my private notebook, and I want to share only some of information to others.
// In order to do that, I can only allow others to read my notebook through a "computed" value.
// "Computed" means the information I give to you but also notify when it's updated.
// Also, when others want to change the content of my notebook, they need to do it via "updateXXX" method.
const state = reactive({
    currentUser: {
        isLoggedIn: false,
        tombText: "",
        birthday: "",
        fireBaseUser: null, // name, (birthday), profile url <- from google firebase auth
    },
    randomUser: {
        name: "",
        birthday: "",
        tombText: "",
    }
})
// DO not use state directly!!!!!!!!!!!!!!!!!!!!!!!!!!!

function loginUser(user) {
    state.currentUser.isLoggedIn = true;
    state.currentUser.fireBaseUser = user;
    axios.get('api/tombtext/' + user.uid)
        .then(tombResponse => {
            // console.log(tombResponse)
            state.currentUser.tombText = tombResponse.data.tombText
        })
        .catch(error => console.log(error))
}

function logoutUser() {
    state.currentUser.isLoggedIn = false;
    state.currentUser.fireBaseUser = null;
    state.currentUser.tombText = "";
}

function submitTombText(text) {
    if(!state.currentUser.isLoggedIn){
        router.push({ path: '/' })
        return
    }
    state.currentUser.tombText = text;
    axios.post('api/tombtext/' + state.currentUser.fireBaseUser.uid, {
        tombText: state.currentUser.tombText
    })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
}

function updateRandomTomb() {
    // state.randomTomb = {
    //     tombText: "A random soul had been here before",
    //     birthday: "1981",
    // };
    axios.get('api/tombtext/' + 'NkL8rBQcGfTaD4gLTWfJoBBlyFk2')
        .then(tombResponse => {
            // console.log(tombResponse)
            state.randomUser.tombText = tombResponse.data.tombText
        })
        .catch(error => console.log(error))
}

// Use `computed` to create object that is reactive
const randomUser = computed(() => state.randomUser)
const currentUser = computed(() => state.currentUser)

function isUserLoggedIn() {
    return state.currentUser.isLoggedIn
}

function getCurrentUser() {
    return state.currentUser
}

function isTombCreated(){
    if(state.currentUser.tombText){
        return true
    }
    else
    {
        return false
    }
}

export const store = {
    loginUser,
    logoutUser,
    submitTombText,
    updateRandomTomb,
    isUserLoggedIn,
    getCurrentUser,
    isTombCreated,
    currentUser,
    randomUser,
};