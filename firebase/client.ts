import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB68-K9eM3vZoCbuZksANhOzNoEfYhXAFs",
  authDomain: "prepwise-a654c.firebaseapp.com",
  projectId: "prepwise-a654c",
  storageBucket: "prepwise-a654c.firebasestorage.app",
  messagingSenderId: "650169030522",
  appId: "1:650169030522:web:c63862a573f550835668c3",
  measurementId: "G-HF6HLPJVSE"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);