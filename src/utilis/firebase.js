// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// this object contains information about the user

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcGwMKQkz0xvPQWXQMGPvgFatdLz8xp-Q",
  authDomain: "react-auth-ff95b.firebaseapp.com",
  projectId: "react-auth-ff95b",
  storageBucket: "react-auth-ff95b.appspot.com",
  messagingSenderId: "131484174510",
  appId: "1:131484174510:web:fcd7878ec402baf467853f",
  measurementId: "G-RB54B75LHJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

// when we push this to github we do not want it to be available for everyone
