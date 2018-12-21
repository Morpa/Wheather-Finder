import firebase from 'firebase/app'

var config = {
    apiKey: "AIzaSyBoVTAYSSJ0IsFpeSMMJ4T1iRBZ7k6ZQ-M",
    authDomain: "weatherfind-108d5.firebaseapp.com",
    databaseURL: "https://weatherfind-108d5.firebaseio.com",
    projectId: "weatherfind-108d5",
    storageBucket: "",
    messagingSenderId: "1041598309247"
  };
  firebase.initializeApp(config);

  export default firebase