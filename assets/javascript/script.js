$(document).ready(function() {
  var state = "";
  var city = "";

  var queryURL = "https://ipapi.co/json";
  var results;

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

  function getLocation(x) {
    console.log("The getLocation is " + state);

    if (
      x === "Florida" ||
      x === "Georgia" ||
      x === "North Carolina" ||
      x === "South Carolina" ||
      x === "Virginia"
    ) {
      city = "Atlanta";
      return "6ZtJ9VXyhcirG0Pusz97Xq";
    } else if (
      x === "Colorado" ||
      x === "Kansas" ||
      x === "New Mexico" ||
      x === "Oklahoma" ||
      x === "Texas" ||
      x === "Utah"
    ) {
      city = "Austin";
      return "6likNOy320ANw4EjVQoUL4";
    } else if (x === "Illinois" || x === "Missouri" || x === "Wisconsin") {
      city = "Chicago";
      return "5GuZsOiVqJa2t82bX1kiwU";
    } else if (
      x === "Indiana" ||
      x === "Michigan" ||
      x === "Ohio" ||
      x === "Pennsylvania"
    ) {
      city = "Detroit";
      return "3m5aCjKic5YLooE7veFhGG";
    } else if (
      x === "Arizona" ||
      x === "California" ||
      x === "Hawaii" ||
      x === "Nevada"
    ) {
      city = "Los Angeles";
      return "7CvoQu1AWSekUC2S1sR5bg";
    } else if (
      x === "Iowa" ||
      x === "Minnesota" ||
      x === "Nebraska" ||
      x === "North Dakota" ||
      x === "South Dakota"
    ) {
      city = "Minneapolis";
      return "0s8OOVjPlMzpZJV10RJ5yB";
    } else if (x === "Arkansas" || x === "Kentucky" || x === "Tennessee") {
      city = "Nashville";
      return "2QyliShG3Uqhda6Rqseeye";
    } else if (
      x === "Connecticut" ||
      x === "Delaware" ||
      x === "Maine" ||
      x === "Maryland" ||
      x === "Massachusetts" ||
      x === "New Hampshire" ||
      x === "New Jersey" ||
      x === "New York" ||
      x === "Rhode Island" ||
      x === "Vermont"
    ) {
      city = "New York";
      return "2KCQ2ZViv9GsveEf56n1Z7";
    } else if (x === "Alabama" || x === "Louisiana" || x === "Mississippi") {
      city = "New Orleans";
      return "2hQF8vOGHR5cmaNGr7fS8j";
    } else if (
      x === "Alaska" ||
      x === "Idaho" ||
      x === "Montana" ||
      x === "Oregon" ||
      x === "Washington" ||
      x === "Wyoming"
    ) {
      city = "Seattle";
      return "3r0qc4QEhbA25KVyECpbS7";
    }
  }

  function playButton(album) {
    var frame =
      "<iframe src='https://open.spotify.com/embed/user/123572670/playlist/" +
      album +
      "' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>";
    $("#player").append(frame);

    console.log(frame);
  }

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

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    results = response.region;
    console.log("THIS STUFF FROM IP APi", results);
    state = results;
    //to check on if ajax is working
    saveIP();

    console.log("this is the city to plug in to api call", city);

    //function for checking url sent from spotify
    // $(document).ready(function() {
    //   var x = geoplugin_region();

    playButton(getLocation(state));

    var accessToken = GetURLParameter("#access_token");

    $.ajax({
      url: "https://api.spotify.com/v1/me",
      headers: {
        Authorization: "Bearer " + accessToken
      }
    }).then(function(response) {
      console.log(response.display_name);
      h3 = $("<h1>");
      h3.text("You are logged in as: " + response.display_name);
      $("#user-info").append(h3);
    });

    $.ajax({
      url:
        "https://api.spotify.com/v1/playlists/" +
        getLocation(state) +
        "/images",
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken
      }
    }).then(function(response) {
      console.log(response);
      $(".album").attr("src", response);
    });
    // });

    //logs an access token sent from spotfiy
    console.log(GetURLParameter("#access_token"));
  });

  var apiURL =
    "https://accounts.spotify.com/authorize?response_type=code&client_id=89925106e2f44201b6be245abb2f7728&scope=playlist-modify-public&redirect_uri=https://davemeneses.github.io/ProjectOne/";
});
