// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyCCdK4m0yI1j3lnLyMbx8o-9LklUBJixtY",
  authDomain: "epic-real-state.firebaseapp.com",
  projectId: "epic-real-state",
  storageBucket: "epic-real-state.appspot.com",
  messagingSenderId: "831115938426",
  appId: "1:831115938426:web:95d831a000214c959049c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default auth ;
