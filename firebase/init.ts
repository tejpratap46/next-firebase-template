// Import the functions you need from the SDKs you need
import { FirebaseError, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBGERCP_4UH7uCuCCiRiOzsLngafWiqcS4",
  authDomain: "tps-files.firebaseapp.com",
  projectId: "tps-files",
  storageBucket: "tps-files.appspot.com",
  messagingSenderId: "133341432267",
  appId: "1:133341432267:web:d0d7f2e40ff8e7787c0e4e",
  measurementId: "G-K94ER1N7S9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

// Initialize services
const auth = getAuth(app);
const firestore = getFirestore(app);
const functions = getFunctions(app);

// Connect to emulators if NEXT_PUBLIC_FIREBASE_USE_EMULATOR is true
if (process.env.NEXT_PUBLIC_FIREBASE_USE_EMULATOR === "true") {
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
