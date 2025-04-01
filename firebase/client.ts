// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAffbFfcRP3Gubn_E492M6RMEDOInKjN6E",
  authDomain: "mockwise-d1ca6.firebaseapp.com",
  projectId: "mockwise-d1ca6",
  storageBucket: "mockwise-d1ca6.firebasestorage.app",
  messagingSenderId: "381454364568",
  appId: "1:381454364568:web:88d355863a46f5d80305ed",
  measurementId: "G-MWCMGKTZEF"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);