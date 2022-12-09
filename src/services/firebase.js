import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCB6Uyrfal7ZppC7pOoz5nMLjZ34nBgdn4',
  authDomain: 'react-chat-app-fef77.firebaseapp.com',
  projectId: 'react-chat-app-fef77',
  storageBucket: 'react-chat-app-fef77.appspot.com',
  messagingSenderId: '1010689354382',
  appId: '1:1010689354382:web:5bee65bb462184177cf7df',
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
