import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBMj1l-ArfLBJrYn59SreqcT_s18Kpxnm0",
    authDomain: "tinder-dbcf9.firebaseapp.com",
    projectId: "tinder-dbcf9",
    storageBucket: "tinder-dbcf9.appspot.com",
    messagingSenderId: "918744226471",
    appId: "1:918744226471:web:95158829f4cd8ab337d982",
    measurementId: "G-RPHTCGEZ5V"
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;