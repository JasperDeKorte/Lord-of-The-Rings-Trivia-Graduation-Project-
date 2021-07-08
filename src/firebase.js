import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD3T6HzOwGmvBvbbuPoWQ0AtxAYJG6ib9g",
    authDomain: "lord-of-the-rings-trivia-12a59.firebaseapp.com",
    projectId: "lord-of-the-rings-trivia-12a59",
    storageBucket: "lord-of-the-rings-trivia-12a59.appspot.com",
    messagingSenderId: "1032057538330",
    appId: "1:1032057538330:web:68513ee9d9fb5e64c8cea3"
};

firebase.initializeApp(firebaseConfig)

export default firebase;