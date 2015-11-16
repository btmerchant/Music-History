
 define(["jquery"], function($) {

    return {
            getSongs: function(theCallback) {
                console.log("getSongs Called");
        $.ajax({
             url:"https://music-history5.firebaseio.com/.json"
         }).done(function(data) {
            console.log("data",data);
            theCallback(data);
         });
        }
     };
});


// $.ajax({
// url: "https://nss-demo-instructor.firebaseio.com/.json"
// }).done(
// function(firebaseData) {
// // Execute the callback function that was sent to me
// console.log("songs array from Firebase: ", firebaseData);
// fnRefFromMainJS(firebaseData);
// }
// );
