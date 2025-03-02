// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebase.config";

// Initialize Firebase
export const fire = initializeApp(firebaseConfig);

export const auth = getAuth(fire);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(fire);
const analytics = getAnalytics(fire);