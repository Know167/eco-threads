// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFireStore} from 'firebase/firestore/lite';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh3_6401w3_TIqAWKVuB6KgC8D5OLMwUw",
  authDomain: "ecothreads-f93bb.firebaseapp.com",
  projectId: "ecothreads-f93bb",
  storageBucket: "ecothreads-f93bb.appspot.com",
  messagingSenderId: "1045555931593",
  appId: "1:1045555931593:web:9c5fb8b719d260eb1ba018",
  measurementId: "G-FCSTH3KQ41"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const db = getFireStore(app)