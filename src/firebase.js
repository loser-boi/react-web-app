import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDD5z7kE9crAbO2_tBzzpQFr1DQdkNk87M",
  authDomain: "instagram-clone-react-3f822.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-3f822.firebaseio.com",
  projectId: "instagram-clone-react-3f822",
  storageBucket: "instagram-clone-react-3f822.appspot.com",
  messagingSenderId: "971360855841",
  appId: "1:971360855841:web:916feb8357f592a7fac060",
  measurementId: "G-YZ1QGZY4GZ",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
