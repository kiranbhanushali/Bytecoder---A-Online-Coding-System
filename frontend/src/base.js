import firebase from 'firebase'
import 'firebase/storage'
var firebaseConfig = {
  "projectId": "byte-coder",
  "appId": "1:679872986405:web:f7802605925f8f09f1aecc",
  "storageBucket": "byte-coder.appspot.com",
  "locationId": "us-central",
  "apiKey": "AIzaSyDEZCMjJe1zJdVre8dDDQMBNxgBx1K7eYY",
  "authDomain": "byte-coder.firebaseapp.com",
  "messagingSenderId": "679872986405",
  "measurementId": "G-ZW86H0P0YT"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const storage = firebase.storage()
export {
  storage, firebase as default
}

