import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3jOq09ZOAS3_BVaXH4R7AjB9vBzWOefs",
  authDomain: "whatsapp-clone-9e3b9.firebaseapp.com",
  projectId: "whatsapp-clone-9e3b9",
  storageBucket: "whatsapp-clone-9e3b9.appspot.com",
  messagingSenderId: "258367769339",
  appId: "1:258367769339:web:10a39bb82c81cf7011fe5e",
  measurementId: "G-HVQQY7T7VL",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };

export default db;
