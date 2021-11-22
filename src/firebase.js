// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBKoVoDOu24f9u9e0kuI_LWwTEB9A6GgOI",
    authDomain: "challange-1024d.firebaseapp.com",
    projectId: "challange-1024d",
    storageBucket: "challange-1024d.appspot.com",
    messagingSenderId: "21409947515",
    appId: "1:21409947515:web:70cc58c31e22b2653327de",
    measurementId: "G-9WJPM16HKV"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};