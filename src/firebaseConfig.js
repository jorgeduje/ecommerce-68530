import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFloHVG8vVkJugVemkQ9ss7oNNzUyE1yw",
  authDomain: "backend-68530-profe.firebaseapp.com",
  projectId: "backend-68530-profe",
  storageBucket: "backend-68530-profe.firebasestorage.app",
  messagingSenderId: "531979720653",
  appId: "1:531979720653:web:48fafccde643207a115684",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
