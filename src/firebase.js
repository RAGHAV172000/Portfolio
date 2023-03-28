// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnXjZcm6mtDl9zPlTKyHUBbAcfVSzOPUk",
  authDomain: "portfoli-contact.firebaseapp.com",
  projectId: "portfoli-contact",
  storageBucket: "portfoli-contact.appspot.com",
  messagingSenderId: "664929599645",
  appId: "1:664929599645:web:3cedbf89c2af2b968f5474"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();