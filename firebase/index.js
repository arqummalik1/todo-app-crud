// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc,getDocs,doc,updateDoc ,deleteDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc3NISlbB02neC-Y4uJo_UMWXIo72kUe4",
  authDomain: "crud-app-fbf42.firebaseapp.com",
  projectId: "crud-app-fbf42",
  storageBucket: "crud-app-fbf42.firebasestorage.app",
  messagingSenderId: "862636422005",
  appId: "1:862636422005:web:a936e6e2ee47c115f7193c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db,collection,addDoc,getFirestore,getDocs,doc,updateDoc,deleteDoc}