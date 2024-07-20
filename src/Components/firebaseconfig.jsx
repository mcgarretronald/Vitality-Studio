import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaLFFPZHtRe0M9zeZVyrZPDFOAkfBToCY",
  authDomain: "vitality-vault-dbfb4.firebaseapp.com",
  projectId: "vitality-vault-dbfb4",
  databaseURL: "https://vitality-vault-dbfb4-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "vitality-vault-dbfb4.appspot.com",
  messagingSenderId: "273561933782",
  appId: "1:273561933782:web:02ac444096bb97b503b677"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue };
