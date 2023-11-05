// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdNiceSYGQzDVRimBYs-X_7EZuA8JzGFU",
    authDomain: "job-service-e1d6a.firebaseapp.com",
    projectId: "job-service-e1d6a",
    storageBucket: "job-service-e1d6a.appspot.com",
    messagingSenderId: "675029729081",
    appId: "1:675029729081:web:ca31adeabb534b5a5c32e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;