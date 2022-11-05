// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDd2Z1Bn8a5ZkbBeeHjy3LFZqsMRLrVi2o",
    authDomain: "zeltron-df6c0.firebaseapp.com",
    projectId: "zeltron-df6c0",
    storageBucket: "zeltron-df6c0.appspot.com",
    messagingSenderId: "396161213313",
    appId: "1:396161213313:web:f9d1be1e19b4ac8236fe80",
    measurementId: "G-G4ZPX50L20"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };