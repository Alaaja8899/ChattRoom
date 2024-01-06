import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-V97FbwQBbLIkbvn98P614nlkKSoGXUk",
  authDomain: "auth-979d8.firebaseapp.com",
  databaseURL: "https://auth-979d8-default-rtdb.firebaseio.com",
  projectId: "auth-979d8",
  storageBucket: "auth-979d8.appspot.com",
  messagingSenderId: "235770544453",
  appId: "1:235770544453:web:79093a7c45b3e323ca7e2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth , provider}