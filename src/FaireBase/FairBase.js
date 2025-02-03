// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtO-__cbgj2ZosOmEi7yC9pNLNrdr_ajQ",
  authDomain: "email-password-5c32e.firebaseapp.com",
  projectId: "email-password-5c32e",
  storageBucket: "email-password-5c32e.firebasestorage.app",
  messagingSenderId: "460064864630",
  appId: "1:460064864630:web:ce0e766e99c919f71ae257",
  measurementId: "G-06558E4V6T"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app)