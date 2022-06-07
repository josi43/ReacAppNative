import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDe0s0tLX1yHzmq20HTqzx8zF7cW5Q8v1c",
    authDomain: "powerfit-436d8.firebaseapp.com",
    projectId: "powerfit-436d8",
    storageBucket: "powerfit-436d8.appspot.com",
    messagingSenderId: "210099372112",
    appId: "1:210099372112:web:f1fc5855a19fe373599155",
    measurementId: "G-TJ7N09D08M"
  };
let app;

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const auth =firebase.auth()


export {auth};