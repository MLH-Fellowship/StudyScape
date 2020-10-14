const express = require('express');
const app = require('../app'); 
const firebase = require('firebase');

var config = {
  apiKey: "AIzaSyD2kPuOnf4st2efOTNn2R1e92wy2rq2jWg",
  authDomain: "student-planner-d43e2.firebaseapp.com",
  databaseURL: "https://student-planner-d43e2.firebaseio.com",
  projectId: "student-planner-d43e2",
  storageBucket: "student-planner-d43e2.appspot.com", 
  messagingSenderId: "327005986193",
  appId: "1:327005986193:web:490cb8f00284781fd3ce30",
  measurementId: "G-KLRT1S5PJG"
};
firebase.initializeApp(config);

const router = express.Router();

/** Home Page */
router.get('/', (req, res) => {
    res.render('homepage.html'); 
});

router.get("/googlesignintoken", function(req, res, next) {
    console.log("Got token");
    const google_id_token = req.query.id_token;
    console.log(google_id_token);
    
    const googleSignIn = (google_id_token) => {
      var credential = firebase.auth.GoogleAuthProvider.credential(google_id_token);
  
      return firebase.auth().signInWithCredential(credential)
      .then((user)=>{
        res.redirect('/dashboard');
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log("GOOGLE USER TO FIREBASE ERROR",errorCode,errorMessage,email,credential)
      // ...
    });
  };
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard.html'); 
});

module.exports = router;