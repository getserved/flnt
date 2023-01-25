import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getFunctions } from 'firebase/functions'

const firebaseConfig = {
  apiKey: 'AIzaSyDxrIof68sUvJEHmOc8PJWv31jMEkdumeM',
  authDomain: 'flnt-fa95d.firebaseapp.com',
  databaseURL: 'https://flnt-fa95d.firebaseio.com',
  projectId: 'flnt-fa95d',
  storageBucket: 'flnt-fa95d.appspot.com',
  messagingSenderId: '907572710550',
  appId: '1:907572710550:web:07049cab492440169406b7',
  measurementId: 'G-WQMJRQ0RHR'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)
const functions = getFunctions(app)
const projectId = firebaseConfig.projectId
const region = 'us-central1'

export { app, db, functions, projectId, region }
