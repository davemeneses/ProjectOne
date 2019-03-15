//function for checking url sent from spotify

function GetURLParameter(sParam) {
  var sPageURL = window.location.hash;
  console.log(sPageURL);
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}

//logs an access token sent from spotfiy
console.log(GetURLParameter("#access_token"));

var accessToken = GetURLParameter("#access_token");
playButton("1DFixLWuPkv3KT3TnV35m3");

//ajax request using accessToken

$.ajax({
  url: "https://api.spotify.com/v1/me",
  headers: {
    Authorization: "Bearer " + accessToken
  }
}).then(function(response) {
  console.log(response.display_name);
  h1 = $("<h1>");
  h1.text("You are logged in as: " + response.display_name);
  $("body").append(h1);
});

function playButton(album) {
  var frame =
    "<iframe src='https://open.spotify.com/embed/album/'" +
    album +
    " width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>";
  $("body").html("");

  console.log(frame);
}

playButton("1DFixLWuPkv3KT3TnV35m3");

var apiURL =
  "https://accounts.spotify.com/authorize?response_type=code&client_id=89925106e2f44201b6be245abb2f7728&scope=playlist-modify-public&redirect_uri=https://davemeneses.github.io/ProjectOne/";
