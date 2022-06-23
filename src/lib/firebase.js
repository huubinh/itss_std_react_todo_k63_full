import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAF8DsnIUBppBx_Kv0F2gShxR_cGSvTUJM",
  authDomain: "react-to-do-app-245a8.firebaseapp.com",
  projectId: "react-to-do-app-245a8",
  storageBucket: "react-to-do-app-245a8.appspot.com",
  messagingSenderId: "1098651728856",
  appId: "1:1098651728856:web:9143da0267f3df8731d0ad"
};

firebase.initializeApp(firebaseConfig);