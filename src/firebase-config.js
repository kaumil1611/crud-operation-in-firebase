import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDeOhvss8lc5wRgZrEXyBD6YCx_pNleO3E",
//   authDomain: "react-http-88cf0.firebaseapp.com",
//   databaseURL: "https://react-http-88cf0-default-rtdb.firebaseio.com",
//   projectId: "react-http-88cf0",
//   storageBucket: "react-http-88cf0.appspot.com",
//   messagingSenderId: "958328592550",
//   appId: "1:958328592550:web:fdf1abf332308d8dad7c67",
// };
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

//const auth = firebase.auth();

// console.log(auth);

export { db };

// firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();

// const auth = firebase.auth();

// console.log(auth);

// export { db };

// firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();

// export { auth };
