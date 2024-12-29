import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAD6_9_nLhcXjiPBUCPo_05rqZ19QA9jKY",
  authDomain: "election-system-c4271.firebaseapp.com",
  projectId: "election-system-c4271",
  storageBucket: "election-system-c4271.firebasestorage.app",
  messagingSenderId: "939715130919",
  appId: "1:939715130919:web:1426805e62216ed7aac002",
  measurementId: "G-T2XPC42ZYY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);