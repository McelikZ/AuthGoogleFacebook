// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI8x57ePulTTDra82uRYCXPobYKjbmMeQ",
  authDomain: "loginproject-c176e.firebaseapp.com",
  projectId: "loginproject-c176e",
  storageBucket: "loginproject-c176e.firebasestorage.app",
  messagingSenderId: "299570814041",
  appId: "1:299570814041:web:c9d8350a9c41e5ebc9a548"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export default app