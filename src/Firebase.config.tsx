import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAivZqlvTJLgBpQQ5kHsmUZz7dhCPJKJ3E",
  authDomain: "internship-7de59.firebaseapp.com",
  projectId: "internship-7de59",
  storageBucket: "internship-7de59.appspot.com",
  messagingSenderId: "431707975040",
  appId: "1:431707975040:web:8cf819d1ac805c39aee565",
};

initializeApp(firebaseConfig);
export { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword };
