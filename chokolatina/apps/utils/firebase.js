import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyCZR5Lum2W5amcAUTgoLjSj3uVN4cTfcws",
  authDomain: "proyect-519bc.firebaseapp.com",
  projectId: "proyect-519bc",
  storageBucket: "proyect-519bc.appspot.com",
  messagingSenderId: "25574924135",
  appId: "1:25574924135:web:3b227b1172b3db544399c2"
}

  export const firebaseApp = firebase.initializeApp(firebaseConfig)