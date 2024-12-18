// Import the functions you need from the SDKs you need
import { FirebaseError, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyCf-Dhz9B0jEksdKa79VP-N21QsIyQRTgE",
  authDomain: "template-project-e6ae5.firebaseapp.com",
  projectId: "template-project-e6ae5",
  storageBucket: "template-project-e6ae5.firebasestorage.app",
  messagingSenderId: "625134750302",
  appId: "1:625134750302:web:61e8fa696292def9ab82cf",
  measurementId: "G-8YX3SVJKF8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

// Initialize services
const auth = getAuth(app);
const firestore = getFirestore(app);
const functions = getFunctions(app);

// Connect to emulators if NEXT_PUBLIC_USE_EMULATOR is true
if (process.env.NEXT_PUBLIC_USE_EMULATOR === "true") {
  // Emulator host and port configuration
  const emulatorHost = "localhost";
  const authPort = 9099;
  const firestorePort = 8080;
  const functionsPort = 5001;

  // Connect to respective emulators
  connectAuthEmulator(auth, `http://${emulatorHost}:${authPort}`);
  connectFirestoreEmulator(firestore, emulatorHost, firestorePort);
  connectFunctionsEmulator(functions, emulatorHost, functionsPort);

  console.log("🚀 Firebase Emulators Connected");
}

function getErrMsg(error: FirebaseError) {
  switch (error.code) {
    case "auth/invalid-credential":
      return "Wrong email or password";
    default:
      console.log(`Unknown Error: ${error.code}`);
      return error.code;
  }
}

export { app, analytics, auth, firestore, functions, getErrMsg };
