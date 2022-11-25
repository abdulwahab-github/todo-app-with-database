// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDatnI8nav_NOrInzeboRxGy7E6rHNYmag",
    authDomain: "hiiii-e5103.firebaseapp.com",
    databaseURL: "https://hiiii-e5103-default-rtdb.firebaseio.com",
    projectId: "hiiii-e5103",
    storageBucket: "hiiii-e5103.appspot.com",
    messagingSenderId: "268557311354",
    appId: "1:268557311354:web:35fd7a25c5499a2b90cac3",
    measurementId: "G-N9GSZ14SL1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

var email = document.getElementById("email");
var password = document.getElementById("password");
window.login= function(e) {
  e.preventDefault();
  var obj = {
    email: email.value,
    password: password.value,
  };

  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      console.log(success.user.uid);
      window.location.replace('index.html')
    })
    .catch(function (err) {
      console.log(err);
    });

  console.log(obj);
}