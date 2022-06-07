import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDmRfrnTNPyKxjXCUGdS0j6tKrSSIfpMVs",
  authDomain: "yoga-app-f6019.firebaseapp.com",
  projectId: "yoga-app-f6019",
  storageBucket: "yoga-app-f6019.appspot.com",
  messagingSenderId: "632983602991",
  appId: "1:632983602991:web:53b610cf803695ae0f83da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)