// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${FIREBASE_API_KEY}`,
  authDomain: `${FIREBASE_AUTH_DOMAIN}`,
  projectId: "cuebuddy-56563",
  storageBucket: "cuebuddy-56563.firebasestorage.app",
  messagingSenderId: "437091310726",
  appId: "1:437091310726:web:4166896d8176038c0dc507",
  measurementId: "G-81TCXP63V0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);