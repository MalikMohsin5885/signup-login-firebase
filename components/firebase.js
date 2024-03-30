import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCQ3KoIzyIzbLl9HRRmCVU42zOniUMCIas",
  authDomain: "myloginproject-9b4c9.firebaseapp.com",
  projectId: "myloginproject-9b4c9",
  storageBucket: "myloginproject-9b4c9.appspot.com",
  messagingSenderId: "85304365776",
  appId: "1:85304365776:web:83bf533b12a66e9e64c4d5",
  measurementId: "G-Z6Z69Z86H8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };