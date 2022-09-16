import firebase from 'firebase/app';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyBR28V0SKmkSYcCvoWYqjy-PQhQzQARvBs",
    authDomain: "chamados-c7576.firebaseapp.com",
    projectId: "chamados-c7576",
    storageBucket: "chamados-c7576.appspot.com",
    messagingSenderId: "31390988753",
    appId: "1:31390988753:web:e733ddccba89458b8788f0",
    measurementId: "G-6GJSHJMCB2"
  };

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;