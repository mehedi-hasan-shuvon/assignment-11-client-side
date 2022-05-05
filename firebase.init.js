// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAA4OBzhLgnsOCMBXsN96DDlFNjNJoHwvA",
    authDomain: "assignment-11-eco-warehouse.firebaseapp.com",
    projectId: "assignment-11-eco-warehouse",
    storageBucket: "assignment-11-eco-warehouse.appspot.com",
    messagingSenderId: "880791117534",
    appId: "1:880791117534:web:f48e4257fc7f959554ac4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;