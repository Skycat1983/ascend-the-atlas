// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBl8gxNn9WWexy3uc-AQ8nokqeTAekOHc",
  authDomain: "ascendtheatlas.firebaseapp.com",
  projectId: "ascendtheatlas",
  storageBucket: "ascendtheatlas.appspot.com",
  messagingSenderId: "515864991400",
  appId: "1:515864991400:web:1a5ddf7a7c9200d4ee549d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
