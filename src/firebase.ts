import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArGeNtexcUpk9iEUIjzIpx4unvyY6-U1Q",
  authDomain: "netflix-clone-d028e.firebaseapp.com",
  projectId: "netflix-clone-d028e",
  storageBucket: "netflix-clone-d028e.appspot.com",
  messagingSenderId: "341778103121",
  appId: "1:341778103121:web:80e250bcd9c6491060b170",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
