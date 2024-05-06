import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDaMVNRTkKKyd9Av9hmhsgCLXUtimXFDhk",
  authDomain: "marine-atrium-411715.firebaseapp.com",
  databaseURL: "https://marine-atrium-411715-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "marine-atrium-411715",
  storageBucket: "marine-atrium-411715.appspot.com",
  messagingSenderId: "214192590120",
  appId: "1:214192590120:web:a8dd7eb3ff813de12c541d"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore(app);


