import firebase from 'firebase/compat/app'
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBLQ7d7qSg4NKA9o9nCLZpBw9gNT8GksmQ",
    authDomain: "ecommerc3-12958.firebaseapp.com",
    databaseURL: "https://ecommerc3-12958-default-rtdb.firebaseio.com",
    projectId: "ecommerc3-12958",
    storageBucket: "ecommerc3-12958.appspot.com",
    messagingSenderId: "571061831306",
    appId: "1:571061831306:web:644ac5de16bfc604500f73",
    measurementId: "G-N4B6HRBT8P"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()


export { auth, db, storage }