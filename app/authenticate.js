angular.module('SongApp')

var email = "";
var password = "";

var ref = new Firebase('https://music-history-btm.firebaseio.com/songs');
ref.createUser({
  email    : email,
  password : password
}, function(error, userData) {
  if (error) {
    console.log("Error creating user:", error);
  } else {
    console.log("Successfully created user account with uid:", userData.uid);
  }
});

var ref = new Firebase('https://music-history-btm.firebaseio.com/songs');
ref.authWithPassword({
  "email": email,
  "password": password
}, function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});
