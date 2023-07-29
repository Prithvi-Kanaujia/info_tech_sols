// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth, initializeAuth, getReactNativePersistence} from "firebase/auth";
import AsnycStorage from "@react-native-async-storage/async-storage";
  // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCiPn-Xhnw3Ya81SepfoQGkEBLGr3AzhM",
  authDomain: "info-tech-sols.firebaseapp.com",
  projectId: "info-tech-sols",
  storageBucket: "info-tech-sols.appspot.com",
  messagingSenderId: "712324609208",
  appId: "1:712324609208:web:f4c79cafc3c9fe25ff304d",
  measurementId: "G-KGLVM2X6DJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app,{
  persistence:getReactNativePersistence(AsnycStorage)
})
