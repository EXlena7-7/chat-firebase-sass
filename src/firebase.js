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


// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getStorage} from "firebase/storage";
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyBRkpK6uz5nTBvOB31uBU4oWRenCtFWbhQ",
//   authDomain: "chat-firebase-13e61.firebaseapp.com",
//   projectId: "chat-firebase-13e61",
//   storageBucket: "chat-firebase-13e61.appspot.com",
//   messagingSenderId: "227386203809",
//   appId: "1:227386203809:web:b9847957547cd749df9ae0"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const storage = getStorage();
// export const db = getFirestore(app);