// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaMczPjtgZFYHrl6NO2pr3o0AXWeuvLfI",
    authDomain: "instagram-clone-364c7.firebaseapp.com",
    projectId: "instagram-clone-364c7",
    storageBucket: "instagram-clone-364c7.appspot.com",
    messagingSenderId: "1011024783217",
    appId: "1:1011024783217:web:87d5093e9566b2c39978d0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage }