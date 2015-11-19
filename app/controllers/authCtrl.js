angular.module('SongApp')
.controller("AuthCtrl",[
    "$firebaseArray",
    function($firebaseArray ) {
      var email = "";
      var password = "";

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
    }
  ]
);




