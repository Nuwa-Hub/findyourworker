// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4BFTBfz83EpWgTRGEGxXVmMw9fW8ItvU",
  authDomain: "findyourworker-19743.firebaseapp.com",
  projectId: "findyourworker-19743",
  storageBucket: "findyourworker-19743.appspot.com",
  messagingSenderId: "44589379219",
  appId: "1:44589379219:web:be1f6c71ca8ae0a26b6766",
  measurementId: "G-08TXK0V6WP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);