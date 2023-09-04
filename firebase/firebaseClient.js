// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqa4QbNv64gBlOBD1Q7HKeuECyDal8lB0",
    authDomain: "personal-web-f09c9.firebaseapp.com",
    projectId: "personal-web-f09c9",
    storageBucket: "personal-web-f09c9.appspot.com",
    messagingSenderId: "362165888008",
    appId: "1:362165888008:web:5c3ffd1308b0c92e889dbd",
    measurementId: "G-2EWZ4BVY7J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
