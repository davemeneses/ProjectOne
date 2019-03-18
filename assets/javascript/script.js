$(document).ready(function() {
  var queryURL = "https://ipapi.co/json";
  var results;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    results = response.region;
    console.log("THIS STUFF FROM IP APi", results);
    //to check on if ajax is working
    saveIP();
  });

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
  function saveIP() {
    database.ref().push({ results });
  }

  //function for checking url sent from spotify

  //   var x = geoplugin_region();
  // var instance = M.Sidenav.getInstance(elem);
  $(".sidenav").sidenav();
  $(".dropdown-trigger").dropdown();
  // $(".drag-target").on("mouseover", function() {
  // instance.open();
  // });

  var city = "";
  function getLocation() {
    if (
      x === "Florida" ||
      "Georgia" ||
      "North Carolina" ||
      "South Carolina" ||
      "Virginia"
    ) {
      city = "Atlanta";
      return "6ZtJ9VXyhcirG0Pusz97Xq";
    } else if (
      x === "Colorado" ||
      "Kansas" ||
      "New Mexico" ||
      "Oklahoma" ||
      "Texas" ||
      "Utah"
    ) {
      city = "Austin";
      return "6likNOy320ANw4EjVQoUL4";
    } else if (x === "Illinois" || "Missouri" || "Wisconsin") {
      city = "Chicago";
      return "5GuZsOiVqJa2t82bX1kiwU";
    } else if (x === "Indiana" || "Michigan" || "Ohio" || "Pennsylvania") {
      city = "Detroit";
      return "3m5aCjKic5YLooE7veFhGG";
    } else if (x === "Arizona" || "California" || "Hawaii" || "Nevada") {
      city = "Los Angeles";
      return "7CvoQu1AWSekUC2S1sR5bg";
    } else if (
      x === "Iowa" ||
      "Minnesota" ||
      "Nebraska" ||
      "North Dakota" ||
      "South Dakota"
    ) {
      city = "Minneapolis";
      return "0s8OOVjPlMzpZJV10RJ5yB";
    } else if (x === "Arkansas" || "Kentucky" || "Tennessee") {
      city = "Nashville";
      return "2QyliShG3Uqhda6Rqseeye";
    } else if (
      x === "Connecticut" ||
      "Delaware" ||
      "Maine" ||
      "Maryland" ||
      "Massachusetts" ||
      "New Hampshire" ||
      "New Jersey" ||
      "New York" ||
      "Rhode Island" ||
      "Vermont"
    ) {
      city = "New York";
      return "2KCQ2ZViv9GsveEf56n1Z7";
    } else if (x === "Alabama" || "Louisiana" || "Mississippi") {
      city = "New Orleans";
      return "2hQF8vOGHR5cmaNGr7fS8j";
    } else if (
      x === "Alaska" ||
      "Idaho" ||
      "Montana" ||
      "Oregon" ||
      "Washington" ||
      "Wyoming"
    ) {
      city = "Seattle";
      return "3r0qc4QEhbA25KVyECpbS7";
    }
  }
  console.log("this is the city to plug in to api call", city);

  //function for checking url sent from spotify
  $(document).ready(function() {
    //   var x = geoplugin_region();
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
});
