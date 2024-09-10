// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvNab_XUPvvTcpDs6iT0A-2vUgbV11VJc",
  authDomain: "musicproject-6607a.firebaseapp.com",
  databaseURL: "https://musicproject-6607a-default-rtdb.firebaseio.com",
  projectId: "musicproject-6607a",
  storageBucket: "musicproject-6607a.appspot.com",
  messagingSenderId: "711359153508",
  appId: "1:711359153508:web:713659721455a36033e671"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dbFirebase = getDatabase(app);

export { dbFirebase };