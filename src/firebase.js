import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyC9k8f1BOiJZrIN2nWGyXCOSUgidawmZiY',
  authDomain: 'clone-a2af3.firebaseapp.com',
  projectId: 'clone-a2af3',
  storageBucket: 'clone-a2af3.appspot.com',
  messagingSenderId: '891011685429',
  appId: '1:891011685429:web:d269e3880cca128e94a57c',
  measurementId: 'G-MJ7QLL8NDE',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }
