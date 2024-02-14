import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhPUIARqJ6cteFza_bQZ_RKNiH-PFk-S8",
  authDomain: "customerdetails-febea.firebaseapp.com",
  databaseURL: "https://customerdetails-febea-default-rtdb.firebaseio.com",
  projectId: "customerdetails-febea",
  storageBucket: "customerdetails-febea.appspot.com",
  messagingSenderId: "16621321245",
  appId: "1:16621321245:web:1d8f3ced92e0c41de39af4"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
