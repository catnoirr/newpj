// firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getFirestore , doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//     apiKey: "AIzaSyC_02HTAI_uLoblrM-YjmWfWOyR8nvtc5E",
//     authDomain: "blog-a64b9.firebaseapp.com",
//     projectId: "blog-a64b9",
//     storageBucket: "blog-a64b9.firebasestorage.app",
//     messagingSenderId: "203964370060",
//     appId: "1:203964370060:web:1e4cc166d8196726edbfa9",
//     measurementId: "G-BW4975VDJ4"
//   };
const firebaseConfig = {
  apiKey: "AIzaSyDa4cYL7wLR8rJn1C8MXyUVVxsRb2aaugg",
  authDomain: "theoohpoint.firebaseapp.com",
  projectId: "theoohpoint",
  storageBucket: "theoohpoint.appspot.com",
  messagingSenderId: "1039836854227",
  appId: "1:1039836854227:web:f3e4c448e44ab53fc0e126",
  measurementId: "G-C2N44JCB4K",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);


export { db ,  storage, doc, getDoc, collection, getDocs };
