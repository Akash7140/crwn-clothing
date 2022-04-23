import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyArW40lCN7hgCp0Hytek5ANhGbIA7uG7Uo",
    authDomain: "crwn-db-5602c.firebaseapp.com",
    projectId: "crwn-db-5602c",
    storageBucket: "crwn-db-5602c.appspot.com",
    messagingSenderId: "291454674284",
    appId: "1:291454674284:web:1e333cb03711b1b8067f49"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
