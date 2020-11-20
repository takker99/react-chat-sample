import Firebase from 'firebase/app'; // 必須
import 'firebase/firestore';
import 'firebase/auth';

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  //measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// 各種APIのexport
export const firebase = Firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore(); // 必要に応じて
export const authentication = firebase.auth();
export default Firebase;
