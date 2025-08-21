// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv7ktJQfqX1cojt7Q8KNoY7sNwiAgYXaE",
  authDomain: "netflixgpt-716c1.firebaseapp.com",
  projectId: "netflixgpt-716c1",
  storageBucket: "netflixgpt-716c1.firebasestorage.app",
  messagingSenderId: "823800107765",
  appId: "1:823800107765:web:97810f5887cb9d417f2bbc",
  measurementId: "G-58XSRQNJCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
