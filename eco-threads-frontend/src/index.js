import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCh3_6401w3_TIqAWKVuB6KgC8D5OLMwUw",
  authDomain: "ecothreads-f93bb.firebaseapp.com",
  projectId: "ecothreads-f93bb",
  storageBucket: "ecothreads-f93bb.appspot.com",
  messagingSenderId: "1045555931593",
  appId: "1:1045555931593:web:9c5fb8b719d260eb1ba018",
  measurementId: "G-FCSTH3KQ41"
};
initializeApp(firebaseConfig)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
