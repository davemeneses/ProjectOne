// Initialize Firebase
var config = {
  apiKey: "AIzaSyBdJOVvHINtcpYSa6zgBIDEDOgHfIol2fo",
  authDomain: "projectone-c2928.firebaseapp.com",
  databaseURL: "https://projectone-c2928.firebaseio.com",
  projectId: "projectone-c2928",
  storageBucket: "projectone-c2928.appspot.com",
  messagingSenderId: "967329805449"
};
firebase.initializeApp(config);

console.log("This is my firebase!", firebase);

var database = firebase.database();

//   document.write(
//     "Welcome to our visitors from " +
//       geoplugin_region() +
//       ", " +
//       geoplugin_countryName()
//   );
//var x = geoplugin_region();
var city = "";
function getLocation() {
  if (x === "Illinois") {
    //   alert("You are in " + x);
    city = "Chicago";
    return "5GuZsOiVqJa2t82bX1kiwU";
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
console.log("this is the city to plug in to api call", city);

//function for checking url sent from spotify
$(document).ready(function() {
  //   var x = geoplugin_region();
  // var instance = M.Sidenav.getInstance(elem);
  $(".sidenav").sidenav();
  $(".dropdown-trigger").dropdown();
  // $(".drag-target").on("mouseover", function() {
  // instance.open();
  // });

  var city = "";

  playButton("5GuZsOiVqJa2t82bX1kiwU");

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

function playButton(album) {
  var frame =
    "<iframe src='https://open.spotify.com/embed/user/123572670/playlist/" +
    album +
    "' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>";
  $("#player").append(frame);

  console.log(frame);
}

var apiURL =
  "https://accounts.spotify.com/authorize?response_type=code&client_id=89925106e2f44201b6be245abb2f7728&scope=playlist-modify-public&redirect_uri=https://davemeneses.github.io/ProjectOne/";

//ajax request for geolocation via IP
$(document).ready(function() {
  var queryURL = "https://ipapi.co/json";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var results = response.region;
    console.log(results); //to check on if ajax is working
  });
});
