define(["jquery","hbs", "dom-access","eventHandlers", "get-songs","lodash","getUnique", "firebase", "bootstrap","material", "getTemplates"],
function($, handlebars, domAccess, eventHandlers, getSongs, lodash, getUnique, firebase, bootstrap, material, templates) {
    var allSongsObject = {};
    var allSongsArray = [];
    var originalSongsArray = [];
    eventHandlers.init({songArray: originalSongsArray});
    var myFirebaseRef = new Firebase("https://music-history5.firebaseio.com");
    myFirebaseRef.child("songs").on("value", function(snapshot) {
        var songs = snapshot.val();
        // console.log("songs", songs);
        allSongsArray = [];
         // console.log("allSongsArray",allSongsArray);
        for (var key in songs) {
          var songWithId = songs[key];
          songWithId.key = key;
          allSongsArray[allSongsArray.length] = songWithId;
      }
     // console.log("allSongsArray",allSongsArray);
      allSongsObject = { songs: allSongsArray };
      originalSongsArray = allSongsArray.slice();
      // console.log("originalSongsArray", originalSongsArray);
      // console.log("allSongsArray",allSongsArray);
      $("#outputBox").html(templates.songs(allSongsObject));
      var uniqueArtists = getUnique(allSongsArray).uniqueArtists;
      // console.log("uniqueArtists", uniqueArtists);
      $("#artists").html(templates.artists({artist:uniqueArtists}));
      var uniqueAlbums = getUnique(allSongsArray).uniqueAlbums;
      // console.log("uniqueAlbums", uniqueAlbums);
      $("#albums").html(templates.albums({album:uniqueAlbums }));
      eventHandlers.updateSongs(originalSongsArray);
  });
});
