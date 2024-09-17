
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDxnIx0xgJl9OORlkeHQtlefqKztHXBXdA",
    authDomain: "react-to-do-a3e0e.firebaseapp.com",
    projectId: "react-to-do-a3e0e",
    storageBucket: "react-to-do-a3e0e.appspot.com",
    messagingSenderId: "857840713220",
    appId: "1:857840713220:web:162ca55c4fd60cb1233f51",
    measurementId: "G-VKCPM60GLD"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);