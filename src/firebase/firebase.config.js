// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrx4-pRVnRwrBFXgdwwilJ_0ZNRV2WReQ",
  authDomain: "context-auth-registrar.firebaseapp.com",
  projectId: "context-auth-registrar",
  storageBucket: "context-auth-registrar.appspot.com",
  messagingSenderId: "809436484418",
  appId: "1:809436484418:web:1077cde6d1558a0b1eeedb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app ;