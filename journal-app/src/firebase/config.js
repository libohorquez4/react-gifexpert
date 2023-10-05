// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB19ISKVDYY3c1l1N-E0V-R8G8jycEkI3c",
    authDomain: "react-udemy-one.firebaseapp.com",
    projectId: "react-udemy-one",
    storageBucket: "react-udemy-one.appspot.com",
    messagingSenderId: "861140536318",
    appId: "1:861140536318:web:116d519e670316c3d68eaf"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
