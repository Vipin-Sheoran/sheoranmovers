import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCr23QtasSXPwNRCdOzlobc2jqmpUP0YTs",
    authDomain: "transaction-data-c60c3.firebaseapp.com",
    databaseURL: "https://transaction-data-c60c3-default-rtdb.firebaseio.com",
    projectId: "transaction-data-c60c3",
    storageBucket: "transaction-data-c60c3.appspot.com",
    messagingSenderId: "458830268850",
    appId: "1:458830268850:web:e649c3d96322b410e43cab",
    measurementId: "G-F366QSSWZG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export {db,auth};