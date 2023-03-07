// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAIlsgQACS5hDpGj7q9Va2HL2aHi9V47Y",
  authDomain: "login-firebase-6c0ed.firebaseapp.com",
  projectId: "login-firebase-6c0ed",
  storageBucket: "login-firebase-6c0ed.appspot.com",
  messagingSenderId: "896370934058",
  appId: "1:896370934058:web:0d82f4077061f72b82de53"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db  }