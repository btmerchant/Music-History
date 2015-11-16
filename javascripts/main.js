
define(["jquery","hbs", "dom-access","eventHandlers", "get-songs","lodash","getUnique", "firebase", "bootstrap","material", "getTemplates"],
function($, handlebars, domAccess, eventHandlers, getSongs, lodash, getUnique, firebase, bootstrap, material, templates) {
    var allSongsObject = {};
    var allSongsArray = [];
    var originalSongsArray = [];

    // Initialize the event handlers
    eventHandlers.init({songArray: originalSongsArray});

    // Create a reference to your Firebase database
    var myFirebaseRef = new Firebase("https://music-history5.firebaseio.com");

//     // Listen for when anything changes on the "songs" key
    myFirebaseRef.child("songs").on("value", function(snapshot) {

//       // Store the entire songs key in a local variable
      var songs = snapshot.val();

      console.log("songs", songs);

//       // Empty out the module-level song array
      allSongsArray = [];
       console.log("allSongsArray",allSongsArray);
//       // Convert Firebase's object of objects into an array of objects
      for (var key in songs) {
        var songWithId = songs[key];
        songWithId.key = key;
        allSongsArray[allSongsArray.length] = songWithId;
      }

     console.log("allSongsArray",allSongsArray);

//       // Now create my base object that will get bound to the
//       // song list Handlebar template (Handlebar templates
//       // always need objects)
      allSongsObject = { songs: allSongsArray };

//       /*
//         Create a copy of the allSongsArray so that when
//         the user clicks the "Clear Filter" button, we can
//         set it back to the original data.
//        */
      originalSongsArray = allSongsArray.slice();

      console.log("originalSongsArray", originalSongsArray);

      console.log("allSongsArray",allSongsArray);

//       // Bind the song object to the song list template
      $("#outputBox").html(templates.songs(allSongsObject));

//       // Make an array of unique artist names
      var uniqueArtists = getUnique(allSongsArray).uniqueArtists;

      console.log("uniqueArtists", uniqueArtists);

//       // Bind the unique artists to the filteredArtists template
      $("#artists").html(templates.artists({artist:uniqueArtists}));

//       // Make an array of unique album names
      var uniqueAlbums = getUnique(allSongsArray).uniqueAlbums;

      console.log("uniqueAlbums", uniqueAlbums);

//       // Bind the unique albums to the filteredAlbums template
      $("#albums").html(templates.albums({album:uniqueAlbums }));

      // Update event handlers with new data
      eventHandlers.updateSongs(originalSongsArray);


//     // Initialize the Material Bootstrap plugin
    // $.material.init();
});





   //  $(document).on("click", "#delete", function() {
   //     $(this).parent().hide();
   // });
});


