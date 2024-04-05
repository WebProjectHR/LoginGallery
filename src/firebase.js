// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBzLJAdef7obia6HmdeWczQBHCpA3W5gk",
    authDomain: "login-boda.firebaseapp.com",
    projectId: "login-boda",
    storageBucket: "login-boda.appspot.com",
    messagingSenderId: "646275139893",
    appId: "1:646275139893:web:3d0451b32d6b5f72b1e47c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)