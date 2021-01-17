import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBU4MwgEfN28MlD56Cw58DIuoCdXZVzBNM',
  authDomain: 'clone-yogesh-fd11a.firebaseapp.com',
  projectId: 'clone-yogesh-fd11a',
  storageBucket: 'clone-yogesh-fd11a.appspot.com',
  messagingSenderId: '166207909261',
  appId: '1:166207909261:web:ba2c283876021e08e2e1c4',
  measurementId: 'G-F22HYE4YGT',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }
