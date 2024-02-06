// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiztWP0bNs7jnEN1RXnnEGCalM3Kz31h0",
  authDomain: "linkdin-clone-c959a.firebaseapp.com",
  projectId: "linkdin-clone-c959a",
  storageBucket: "linkdin-clone-c959a.appspot.com",
  messagingSenderId: "360160244014",
  appId: "1:360160244014:web:ab8fa52cdea27523488abf",
  measurementId: "G-P07RFMWVWK",
};

//initialize firebase
export const app = initializeApp(firebaseConfig);

//firestore
export const firestore = getFirestore(app);

//initialize auth
export const auth = getAuth(app);
