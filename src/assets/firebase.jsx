import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzoDmck8mltnWqZ5azM_00WjGp6Enn4Hk",
  authDomain: "fir-login-cf753.firebaseapp.com",
  projectId: "fir-login-cf753",
  storageBucket: "fir-login-cf753.appspot.com",
  messagingSenderId: "716719737108",
  appId: "1:716719737108:web:abf58f6eae4cb163481a01"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth};