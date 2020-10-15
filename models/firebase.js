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

const googleSignIn = (google_id_token)  => {
    var credential = firebase.auth.GoogleAuthProvider.credential(google_id_token);
    
    return firebase.auth().signInWithCredential(credential)
    .then((user)=>{
      console.log("Success");
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