angular.module('SongApp')
.controller("AddSongCtrl",[
    "$firebaseArray",
    function($firebaseArray ) {
      var ref = new Firebase('https://music-history-btm.firebaseio.com/songs');
      this.songs = $firebaseArray(ref);
      this.newSong = {};

      this.addSong = function() {
        this.songs.$add({
          artist: this.newSong.artist,
          title: this.newSong.title
          // album: {
          //   name: this.newSong.name,
          //   year: this.newSong.year
          // }
        // Use .bind when "this" is used instead of $scope in a function!
        }.bind(this));
        console.log("Addsong", $scope.songs_list);
        // console.log("SongList", $firebaseArray.songList);
        // $scope.$apply();
      };
    }
  ]
);
