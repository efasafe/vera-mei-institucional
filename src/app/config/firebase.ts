import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCPPyS7GTF2N9JhOZ6pSaA-iAyYnL5OAfs",
  authDomain: "vera-mei.firebaseapp.com",
  projectId: "vera-mei",
  storageBucket: "vera-mei.firebasestorage.app",
  messagingSenderId: "13405683948",
  appId: "1:13405683948:web:d4befc301f320fa8a8e5c9",
  measurementId: "G-X885WF1ENW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
