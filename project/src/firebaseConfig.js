// import { initializeApp } from "firebase/app";
// import {getFirestore} from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyA1_6x4samLoCIBTDG2O7ocf-66Y91BvXA",
//   authDomain: "react-checkins.firebaseapp.com",
//   projectId: "react-checkins",
//   storageBucket: "react-checkins.appspot.com",
//   messagingSenderId: "103621130626",
//   appId: "1:103621130626:web:30bda7bc9ef552b53d779b"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const firestore = getFirestore(app);

// export {firestore};

// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA1_6x4samLoCIBTDG2O7ocf-66Y91BvXA",
  authDomain: "react-checkins.firebaseapp.com",
  projectId: "react-checkins",
  storageBucket: "react-checkins.appspot.com",
  messagingSenderId: "103621130626",
  appId: "1:103621130626:web:30bda7bc9ef552b53d779b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
