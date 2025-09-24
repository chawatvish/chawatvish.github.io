// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi7RynTAbnT8wMHdCzL3aBNfkdqnUfqn0",
  authDomain: "cwstory-com.firebaseapp.com",
  projectId: "cwstory-com",
  storageBucket: "cwstory-com.firebasestorage.app",
  messagingSenderId: "908315591751",
  appId: "1:908315591751:web:b8016f555bff4722ce1d62",
  measurementId: "G-S9Z8XFP5CG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default { app, analytics };