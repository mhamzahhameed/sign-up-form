// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4Pe708J2OYfQg8sCZTrhKwohABllFoD8",
  authDomain: "sign-up-form-1123.firebaseapp.com",
  projectId: "sign-up-form-1123",
  storageBucket: "sign-up-form-1123.appspot.com",
  messagingSenderId: "449802351094",
  appId: "1:449802351094:web:ce7298aa3ec16737fd17d7",
  measurementId: "G-3W33588JL9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
