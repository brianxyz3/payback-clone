// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt7A_haO4zdnV5ZYXHuHAWMR_8V3N8L-o",
  authDomain: "test-firebase-f95f9.firebaseapp.com",
  projectId: "test-firebase-f95f9",
  storageBucket: "test-firebase-f95f9.firebasestorage.app",
  messagingSenderId: "819753290126",
  appId: "1:819753290126:web:713b0b57c42de9ad337cdf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { app, auth };
// export const database = getFirestore(app);
// export const storage = getStorage(app);
