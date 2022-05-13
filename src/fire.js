import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAx5k4Z90MsqiGEBQGZy4qivWeQYUOnGZQ",
    authDomain: "portfolio-fd546.firebaseapp.com",
    projectId: "portfolio-fd546",
    storageBucket: "portfolio-fd546.appspot.com",
    messagingSenderId: "464203878467",
    appId: "1:464203878467:web:c921e14f95083b6aebc4f6",
    measurementId: "G-BWD722VJXD"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
export  default firebaseConfig;