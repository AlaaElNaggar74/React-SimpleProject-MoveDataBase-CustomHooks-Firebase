import firebase from 'firebase/compat/app';

import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
 
  apiKey: "AIzaSyATyPwDjn13wWQUX1DKfl40ZrEgpr38WVk",
  authDomain: "fir-tranining-8fd4d.firebaseapp.com",
  projectId: "fir-tranining-8fd4d",
  storageBucket: "fir-tranining-8fd4d.appspot.com",
  messagingSenderId: "678867905611",
  appId: "1:678867905611:web:75f8d1f94ce8aa1f5af1ce"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export {  db };