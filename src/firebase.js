import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDXE8rQ8ZIhNt-KeVln3NB4bC5svfjFkfw",
    authDomain: "ecomercelr5.firebaseapp.com",
    projectId: "ecomercelr5",
    storageBucket: "ecomercelr5.appspot.com",
    messagingSenderId: "1082647730871",
    appId: "1:1082647730871:web:7b97c1986a95cdad954b32"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()

