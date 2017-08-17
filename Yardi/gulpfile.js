$(function(){

   gapi.load('auth2', function() {
        gapi.auth2.init();
      });
});

 function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
        window.location = "http://localhost:8000/index2.html";
        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
      };

function signOut() {
    // console.log(gapi.auth2.init();

    var auth2 = gapi.auth2.getAuthInstance();
    

     auth2.signOut().then(function () {
      console.log('User signed out.');
       window.location = "http://localhost:8000";
    });



  }


