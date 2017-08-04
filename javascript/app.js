// declare app modules
var app = angular.module("app", []);

// configure connection to firebase db
var config = {
    apiKey: "AIzaSyAzrnLrwQYGwuF_DpKHF8yJNtJ55AfLzBg",
    authDomain: "dogs-around-the-world.firebaseapp.com",
    databaseURL: "https://dogs-around-the-world.firebaseio.com"
};
firebase.initializeApp(config);
var database = firebase.database();

firebase.auth().signInAnonymously().catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  if (errorCode === 'auth/operation-not-allowed') {
    alert('You must enable Anonymous auth in the Firebase Console.');
  } else {
    console.error(error);
  }
});