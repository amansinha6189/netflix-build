import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAYIHv40mYNhtIwQwIb7A6KW_saF8L9xQU',
  authDomain: 'netflix-clone-82c03.firebaseapp.com',
  projectId: 'netflix-clone-82c03',
  storageBucket: 'netflix-clone-82c03.appspot.com',
  messagingSenderId: '157108148348',
  appId: '1:157108148348:web:d2e3f255bcf956294ed1f9',
  measurementId: 'G-12H3TG5EK4',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
