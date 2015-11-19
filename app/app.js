var app = angular.module('SongApp', ['ngRoute', 'firebase']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/songs/list', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongCtrl as bully'
      })
      .when('/songs/new', {
        templateUrl: 'partials/song-form.html',
        controller: 'AddSongCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

app.controller("AddSongCtrl",[
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

// app.controller("SongCtrl",[
//   "$scope",
//   "$firebaseArray",
//   function($scope, $firebaseArray) {
//     var ref = new Firebase('https://music-history-btm.firebaseio.com/songs');
//     $scope.song_list = $firebaseArray(ref);
//     console.log("Firebase",$scope.songs);
//     }
//   ]);



// app.controller("AddSongCtrl",[
//     "$scope",
//     "$firebaseArray",
//     function($scope, $firebaseArray ) {
//       var ref = new Firebase('https://music-history-btm.firebaseio.com/songs');
//       $scope.songs = $firebaseArray(ref);
//       $scope.newSong = {};

//       $scope.addSong = function() {
//         $scope.songs.$add({
//           artist: $scope.newSong.artist,
//           title: $scope.newSong.title
//           // album: {
//           //   name: $scope.newSong.name,
//           //   year: $scope.newSong.year
//           // }
//         });
//         console.log("Addsong", $scope.songs_list);
//         // console.log("SongList", $firebaseArray.songList);
//         // $scope.$apply();
//       };
//     }
//   ]
// );


//Music History App refactored using Angular
// var app = angular.module('SongApp', ['ngRoute']);

// app.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//       when('/songs/list', {
//         templateUrl: 'partials/song-list.html',
//         controller: 'SongCtrl'
//       });
//       //  when('/songs/new', {
//       //   templateUrl: 'partials/song-form.html',
//       //   controller: 'AddSongCtrl'
//       // });
//   }]);

  // app.factory('songService', function($http, $q) {
  //   var songList;
  //   var getSongData = function() {
  //     return $q(function(resolve, reject) {
  //       http
  //         get('./data/songs.json')
  //         sucess()
  //     })
  //   }
  // });
// app.controller("SongCtrl", function($scope, $http) {
//   $scope.songs = null;
//   $http.get('song.json')
//   .success(function(data, status, headers, config) {
//       console.log("data", data);
//     return $scope.songs = data.songs;
//   })
//   .error(function(data, status, headers, config) {
//     console.log("data", data);
//     console.log("status", status);
//     console.log("headers", headers);
//     console.log("config", config);
//   });


// app.controller("SongCtrl", function($scope) {

//   $.ajax('javascripts/songs.json')
//     .done(function(ajaxData){
//     $scope.songs = ajaxData.songs;
//     $scope.$apply();
//     console.log(ajaxData);
//   }).fail(function(error){
//     console.log("error", error);
//   });
//   $scope.newSong = {artist: "", album: "", title: ""};

//    $scope.addSong = function() {
//       $scope.songs.$add({
//         artist: $scope.newSong.artist,
//         title: $scope.newSong.title,
//         album: $scope.newSong.album
//       });
//    };
// });

// app.factory('song_service', function($http, $q) {
//   var songList[];

// function init() {
//     return $q(function(resolve, reject) {
//     $http.get('./data/songs.json')
//       .success(function(objectFromJSONFile) {
//           songList = objectFromJSONFile.songs;
//           resolve(songList);
//           console.log(songList);
//         },function(error) {
//           reject(error);
//         }
//       );
//     });
//   }

//   init();
//   function getSongs(){
//     return getSongData();
//   }

//   function getSingleSong(id) {
//     return songList.filter(function(song){
//       return song.id === id;
//     })[0];
//   }

//   function addSong(songObj) {
//     songList.push(songObj);
//     return songList;
//   }

//   return {
//     getSongs: getSongs,
//     getSingleSong: getSingleSong,
//     addSong: addSong
//   };
// }); //end factory
