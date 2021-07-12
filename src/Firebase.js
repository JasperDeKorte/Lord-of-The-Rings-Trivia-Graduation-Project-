// import firebase from "firebase/app";
import firebase from "firebase"
import "firebase/firestore";
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyD3T6HzOwGmvBvbbuPoWQ0AtxAYJG6ib9g",
    authDomain: "lord-of-the-rings-trivia-12a59.firebaseapp.com",
    projectId: "lord-of-the-rings-trivia-12a59",
    storageBucket: "lord-of-the-rings-trivia-12a59.appspot.com",
    messagingSenderId: "1032057538330",
    appId: "1:1032057538330:web:68513ee9d9fb5e64c8cea3"
};

firebase.initializeApp(firebaseConfig)
const database = firebase.database().ref();

console.log("Dit is firebase: ", firebase)

export default database;