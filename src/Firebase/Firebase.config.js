// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSzu_5hoxf6_x1z5Bwug7uI7Z13QOdDoU",
  authDomain: "eleventh-assignment-6f63d.firebaseapp.com",
  projectId: "eleventh-assignment-6f63d",
  storageBucket: "eleventh-assignment-6f63d.appspot.com",
  messagingSenderId: "4900702763",
  appId: "1:4900702763:web:5f0c2fb9405784f2ccb86e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;