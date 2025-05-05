// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyC3GZBzwRBPMHqCXSwkIkYoroHyRtgnchI",
  authDomain: "inventiq-47fe7.firebaseapp.com",
  projectId: "inventiq-47fe7",
  storageBucket: "inventiq-47fe7.firebasestorage.app",
  messagingSenderId: "55334615495",
  appId: "1:55334615495:web:38934e568c2c061f3f41e2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
