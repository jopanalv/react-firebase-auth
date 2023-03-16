// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA4PlCc5nug-kF-KX8Kv95WMZdeGsLea9c",
  authDomain: "ngutang-ce76f.firebaseapp.com",
  projectId: "ngutang-ce76f",
  storageBucket: "ngutang-ce76f.appspot.com",
  messagingSenderId: "590575233371",
  appId: "1:590575233371:web:cf6275feee326d8f4c527e",
  measurementId: "G-ZY7T7H88FK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();

// module.exports = { auth };
export { auth, googleProvider, fbProvider }