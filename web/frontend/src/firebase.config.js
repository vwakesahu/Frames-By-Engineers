import { initializeApp, getApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQaAKEeZp13MaQyD8XvJ8rqdAu5F_0wxQ",
  authDomain: "frames-1a35e.firebaseapp.com",
  databaseURL: "https://frames-1a35e-default-rtdb.firebaseio.com",
  projectId: "frames-1a35e",
  storageBucket: "frames-1a35e.appspot.com",
  messagingSenderId: "49973881889",
  appId: "1:49973881889:web:6c2c6cd0f638f7de45c760",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
