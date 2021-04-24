import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCAZy7SGJ5Vs5IK455tJHi7HrBbEs2i10A",
    authDomain: "crwn-db-bfe4f.firebaseapp.com",
    projectId: "crwn-db-bfe4f",
    storageBucket: "crwn-db-bfe4f.appspot.com",
    messagingSenderId: "931340295658",
    appId: "1:931340295658:web:399ed70525e00539d92693",
    measurementId: "G-566F8RVFXP"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;