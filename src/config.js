import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

console.log(process.env.REACT_APP_TEST);


const app = initializeApp({
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "ea-ca-54342.firebaseapp.com",
  projectId: "ea-ca-54342",
  storageBucket: "ea-ca-54342.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
});

// Initialize Firebase
export default app;
export const auth = getAuth(app);
export const db = getFirestore(app);