import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyBuI_Ym9tGsXNPHryxUQdAxdzLaQ96wRgQ",
    authDomain: "clases-37198.firebaseapp.com",
    projectId: "clases-37198",
    storageBucket: "clases-37198.appspot.com",
    messagingSenderId: "804532469962",
    appId: "1:804532469962:web:9bc24ce035484f408af433"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig)