// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdZjw3Cgef3QXraKxGe7kh5YNjKC02oDA",
  authDomain: "todo-react-app-a3d01.firebaseapp.com",
  projectId: "todo-react-app-a3d01",
  storageBucket: "todo-react-app-a3d01.appspot.com",
  messagingSenderId: "825822229435",
  appId: "1:825822229435:web:93dd10bd1632290dc8ca9e",
  measurementId: "G-12XE7YDZXZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db };
     