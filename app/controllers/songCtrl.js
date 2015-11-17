angular.module('SongApp')
  .controller("SongCtrl",[
  "$firebaseArray",
  function($firebaseArray) {
    var ref = new Firebase('https://music-history-btm.firebaseio.com/songs');
    this.song_list = $firebaseArray(ref);
    console.log("Firebase",this.songs);
    }
  ]);
