
import { reactive, readonly, computed} from "vue";

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

function updateUser(u) {
    // TODO
    state.currentUser.isLoggedIn = true;
    state.currentUser.fireBaseUser = u; // TODO
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

export const store = {
    state: readonly(state),
    updateUser,
    submitTombText,
    updateRandomTomb,
    randomTomb,
};