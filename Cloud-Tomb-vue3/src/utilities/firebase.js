import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
        apiKey: "AIzaSyC4tAGEEm4JwYdfX1jAcUi__p_Pxo1_1U4",
        authDomain: "cloud-tomb.firebaseapp.com",
        databaseURL: "https://cloud-tomb.firebaseio.com",
        projectId: "cloud-tomb",
        storageBucket: "cloud-tomb.appspot.com",
        messagingSenderId: "445919757841",
        appId: "1:445919757841:web:0e35a2b5f04b4d9cb393b0"
}

firebase.initializeApp(firebaseConfig)

export default firebase