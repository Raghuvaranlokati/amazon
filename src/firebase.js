// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk5OOLCW53nheK72fJVTKg4_DocnAmNPE",
  authDomain: "fir-f6834.firebaseapp.com",
  projectId: "fir-f6834",
  storageBucket: "fir-f6834.appspot.com",
  messagingSenderId: "650164959510",
  appId: "1:650164959510:web:617a9b60098d2eb585f837",
  measurementId: "G-B5VY35HC9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);