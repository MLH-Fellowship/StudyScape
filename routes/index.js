const express = require('express');
const app = require('../app'); 

const router = express.Router();

/** Home Page */
router.get('/', (req, res) => {
    res.render('homepage.html'); 
});

router.get("/googlesignintoken", function(req, res, next) {
    console.log("Got token");
    const google_id_token = req.query.id_token;
    console.log(google_id_token);
    var credential = firebase.auth.GoogleAuthProvider.credential(google_id_token);
  
  return firebase.auth().signInWithCredential(credential)
  .then((user)=>{
    //addNewUserToDatabase({result:user.user, db});
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
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard.html'); 
});

module.exports = router;