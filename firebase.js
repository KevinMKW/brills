// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbySNhvbPO79b67HzEbTTwioMxN5JEeEI",
  authDomain: "brills-project.firebaseapp.com",
  projectId: "brills-project",
  storageBucket: "brills-project.appspot.com",
  messagingSenderId: "378138268577",
  appId: "1:378138268577:web:9cfd202f0563b8f65371e0",
  measurementId: "G-DRJ8PDVEHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);