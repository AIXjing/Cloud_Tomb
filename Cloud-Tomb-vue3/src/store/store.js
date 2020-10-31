
import { reactive, computed} from "vue";

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
    randomTomb: {
        tombText: "",
        birthday: "",
    }
})
//
function loginUser(user) {
    state.currentUser.isLoggedIn = true;
    state.currentUser.fireBaseUser = user;
}

function logoutUser() {
    state.currentUser.isLoggedIn = false;
    state.currentUser.fireBaseUser = null;
}

function submitTombText(text) {
    state.currentUser.tombText = text;
}

function updateRandomTomb() {
    state.randomTomb = {
        tombText: "A random soul had been here before",
        birthday: "1981",
    };
}

// Use `computed` to create object that is reactive
const randomTomb = computed(() => state.randomTomb)
const currentUser = computed(() => state.currentUser)


export const store = {
    loginUser,
    logoutUser,
    submitTombText,
    updateRandomTomb,
    currentUser,
    randomTomb,
};