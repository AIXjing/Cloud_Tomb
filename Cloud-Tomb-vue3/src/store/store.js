
import { reactive, readonly } from "vue";

const state = reactive({
    currentUser: {
        isLoggedIn: false,
        tombText: "",
        birthday: "",
        fireBaseUser: null, // name, (birthday), profile url <- from google filebase auth
    },
    randomTomb: {
        tombText: "",
        birthday: "",
    }
})

function login(user) {
    // TODO
    state.currentUser.isLoggedIn = true;
    state.currentUser.fireBaseUser = user; // TODO
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

// const totalLength = computed(() => state.items.length);

export const store = {
    state: readonly(state),
    login,
    submitTombText,
    updateRandomTomb,
};