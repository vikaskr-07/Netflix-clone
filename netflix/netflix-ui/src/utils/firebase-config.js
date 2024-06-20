
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfPJM5jELhz4-VzOUwbc6d1dQscXq_2ak",
  authDomain: "react-netflix-clone-cb46d.firebaseapp.com",
  projectId: "react-netflix-clone-cb46d",
  storageBucket: "react-netflix-clone-cb46d.appspot.com",
  messagingSenderId: "353731582355",
  appId: "1:353731582355:web:c4f20dcc10a12e85df7066",
  measurementId: "G-YGSQMJ7PJ8"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);