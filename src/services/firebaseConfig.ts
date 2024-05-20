// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYVjsAZEOLuI8sg-m4q6GyloHudYCxmpg",
  authDomain: "mandoro-tech.firebaseapp.com",
  projectId: "mandoro-tech",
  storageBucket: "mandoro-tech.appspot.com",
  messagingSenderId: "1077338519879",
  appId: "1:1077338519879:web:57f591080b17c3d0c5b462",
  measurementId: "G-FH4RV3HK32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };