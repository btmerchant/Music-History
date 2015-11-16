requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'material': '../bower_components/bootstrap-material-design/dist/js/material.min'
  },
  shim: {
    'bootstrap': ['jquery'],
    'material': ['bootstrap']
  }
});

requirejs(
  ["jquery", "hbs", "bootstrap", "material", "loadSongs"],
  function($, Handlebars, bootstrap, material, loadSongs) {
    // var moreSongsLoaded = false;

    $.material.init();


    // console.log("adding a click event handle for the more songs button");
    // $(document).on("click", "#loadMoreSongs", function(e) {

    //   if (!moreSongsLoaded) {
    //     moreSongsLoaded = true;

    //     moreSongs.querySongs(function(songObject) {
    //       console.log("songs array sent back from moreSongs module: ", songObject);

    //       console.log("Now binding the song array to the Handlebar template");
    //       require(['hbs!../templates/songs'], function(songTemplate) {
    //         $("#songList").append(songTemplate(songObject));
    //       });

    //       filterForm(songObject);
    //     });
    //   } else {
    //     $('#alreadyLoaded').modal();
    //   }

    // });
  }
);






// Brian
// var songs = [];
// var cleanSongs = [];
// var badCharPos = [];
// var output = [];
// var out = "";
// songs[songs.length] = "White Freight Liner > New Grass Revival on the album Barren County";
// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
// songs[songs.length] = "Comotion > by Creedence > Clearwater  !Re*vival on the album Green River";
// console.log("songs"+"\n"+songs);

// for (var p = 0; p <= songs.length - 1;  ++p) {
//   out += songs[p].replace(/[<>@*!$]/g, "")   // process single element of array songs
//   document.getElementById("artistData").innerHTML = out;
// }


// console.log(cleanSongs);


// // for (var p = 0; p <= cleanSongs.length - 1;  ++p) {
// //   output += "<li>"+cleanSongs[p]+"</li>"+"<br>";
// //   // output += cleanSongs[p];





// // Use JavaScript arrays, loops, and innerHTML to show the music you love.

// // Students must use JavaScript to create a list of songs in the index.html file for their Music History project. Have them download the resources/js-101.js file, which contains an array of strings with song information.

// // Each student must add one song to the beginning and the end of the array.
// // Loop over the array and remove any words or characters that obviously don't belong.
// // Students must find and replace the > character in each item with a - character.
// // Must add each string to the DOM in index.html in the main content area.

// // {Song name} by {Artist} on the album {Album}
