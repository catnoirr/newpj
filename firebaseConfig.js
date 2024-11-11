// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC_02HTAI_uLoblrM-YjmWfWOyR8nvtc5E",
    authDomain: "blog-a64b9.firebaseapp.com",
    projectId: "blog-a64b9",
    storageBucket: "blog-a64b9.firebasestorage.app",
    messagingSenderId: "203964370060",
    appId: "1:203964370060:web:1e4cc166d8196726edbfa9",
    measurementId: "G-BW4975VDJ4"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
