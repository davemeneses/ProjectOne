//   document.write(
//     "Welcome to our visitors from " +
//       geoplugin_region() +
//       ", " +
//       geoplugin_countryName()
//   );
var x = geoplugin_region();
var city = "";
function getLocation() {
  if (x === "Illinois") {
    //   alert("You are in " + x);
    city = "Chicago";
  } else if (x === "Louisiana") {
    city = "New Orleans";
  } else if (x === "Tennessee") {
    city = "Nashville";
  } else if (x === "Texas") {
    city = "Austin";
  } else if (x === "Georgia") {
    city = "Atlanta";
  } else if (x === "Detroit") {
    city = "Michigan";
  } else if (x === "New York") {
    city = "New York";
  } else if (x === "Minnesota") {
    city = "Minneapolis";
  } else if (x === "California") {
    city = "Los Angeles";
  }
}
getLocation();
console.log("this is the city to plug in to api call", city);

//function for checking url sent from spotify
$(document).ready(function() {
  playButton("1DFixLWuPkv3KT3TnV35m3");

  $.ajax({
    url: "https://api.spotify.com/v1/me",
    headers: {
      Authorization: "Bearer " + accessToken
    }
  }).then(function(response) {
    console.log(response.display_name);
    h1 = $("<h1>");
    h1.text("You are logged in as: " + response.display_name);
    $("#user-info").append(h1);
  });
});

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

//ajax request using accessToken

// $.ajax({
//   url: "https://api.spotify.com/v1/me",
//   headers: {
// Authorization: "Bearer " + accessToken
//   }
// }).then(function(response) {
//   console.log(response.display_name);
//   h1 = $("<h1>");
//   h1.text("You are logged in as: " + response.display_name);
//   $("body").append(h1);
// });

function playButton(album) {
  var frame =
    "<iframe src='https://open.spotify.com/embed/album/" +
    album +
    "' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>";
  $("#player").append(frame);

  console.log(frame);
}

var apiURL =
  "https://accounts.spotify.com/authorize?response_type=code&client_id=89925106e2f44201b6be245abb2f7728&scope=playlist-modify-public&redirect_uri=https://davemeneses.github.io/ProjectOne/";
