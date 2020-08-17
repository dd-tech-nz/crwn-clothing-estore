import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBV_-y_SJy7i0YQw92F_BHpiAH8B39aSSk",
  authDomain: "estore-project-a56fa.firebaseapp.com",
  databaseURL: "https://estore-project-a56fa.firebaseio.com",
  projectId: "estore-project-a56fa",
  storageBucket: "estore-project-a56fa.appspot.com",
  messagingSenderId: "375927744892",
  appId: "1:375927744892:web:5fefda150114773c559cf9",
  measurementId: "G-2GPJXL0HVY"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase