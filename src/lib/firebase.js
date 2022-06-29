import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAF8DsnIUBppBx_Kv0F2gShxR_cGSvTUJM",
  authDomain: "react-to-do-app-245a8.firebaseapp.com",
  databaseURL: "https://react-to-do-app-245a8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-to-do-app-245a8",
  storageBucket: "react-to-do-app-245a8.appspot.com",
  messagingSenderId: "1098651728856",
  appId: "1:1098651728856:web:9143da0267f3df8731d0ad"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const getFirebaseItems = async () => {
  try {
    const snapshot = await db
      .collection("todos")
      .get();
    const items = snapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    return items;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export const addFirebaseItem = async (item) => {
  try {
    const todoRef = db.collection("todos");
    await todoRef.add(item);
  } catch (err) {
    console.log(err);
  }
}

export const updateFirebaseItem = async (item, id) => {
  try {
    const todoRef = db.collection("todos").doc(id);
    await todoRef.update(item);
  } catch (err) {
    console.log(err);
  }
}

export const clearFirebaseItem = async (item) => {
  const todoRef = db.collection("todos").doc(item.id);
  await todoRef.delete().then(function () {
  }).catch(function (err) {
    console.log(err);
  });
};
