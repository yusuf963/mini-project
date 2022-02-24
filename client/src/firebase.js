import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from "firebase/auth";




const firebaseConfig = {
    apiKey: "AIzaSyAfmHLQvnzzVCFxbjyhm8IqOPWfYijnSOc",
    authDomain: "mini-project-342314.firebaseapp.com",
    projectId: "mini-project-342314",
    storageBucket: "mini-project-342314.appspot.com",
    messagingSenderId: "1025628232977",
    appId: "1:1025628232977:web:e06ab2fa77f1bccd88c0b0"
  };

const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

export const auth = getAuth();



