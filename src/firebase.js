// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN0pdriAQEjDlPv_jixUyd5upoJRXAr2M",
  authDomain: "cursor-8b9af.firebaseapp.com",
  projectId: "cursor-8b9af",
  storageBucket: "cursor-8b9af.firebasestorage.app",
  messagingSenderId: "3939645003",
  appId: "1:3939645003:web:c213e06496845a3eadffce",
  measurementId: "G-KQ2WHHVQM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);