define(["jquery"], function($) {

    return {

            // domAccess: function(theCallback) {
            //     console.log("domAccess Called");
        domAccess: function(songList) {
             for (var i = 0; i < songList.songs.length; i++) {
                var currentSong = songList.songs[i];
    // build string to append as a variable first to avoud browser issues
                var appendString = '<div class="container" id="container-'+ i + '"><h2>' + currentSong.title + '</h2>';
                appendString += "Performed by " + "<inline><i>" + currentSong.artist + "</i></inline>   ";
                appendString += "<button id='delete'>Delete</button>";
                appendString += "</div>";
                $("#allMySongs").append(appendString);
                console.log(document);
                console.log("Context of callBackFunction is ", $(this));
            }
        }
     };
});
