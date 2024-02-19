
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBM8o4i_2OCAZRBgzXMWCSv53a_Y7iWNSI",
    authDomain: "figma-clone-e9fdb.firebaseapp.com",
    projectId: "figma-clone-e9fdb",
    storageBucket: "figma-clone-e9fdb.appspot.com",
    messagingSenderId: "720275104273",
    appId: "1:720275104273:web:4c4357a83d8a8c7cbf47b0",
    // measurementId: "G-R1KKTB81RY"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)
export { app, auth }
