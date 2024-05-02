import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWW4c3RRvl9_CAxWW12MMxN-GzvHgVJdk",
  authDomain: "login-page-8dc5f.firebaseapp.com",
  projectId: "login-page-8dc5f",
  storageBucket: "login-page-8dc5f.appspot.com",
  messagingSenderId: "44881038689",
  appId: "1:44881038689:web:3525a789bf0c22da2bc920",
  measurementId: "G-SL5CNMZ0TW"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
