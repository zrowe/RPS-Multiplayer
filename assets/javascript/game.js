  var debug = 1 // my handy console debug flag

  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyAPxhfFl_Yf_ZCoNC9iewYcA7WU2BQ26zk",
      authDomain: "multiplayer-rps-c1bb6.firebaseapp.com",
      databaseURL: "https://multiplayer-rps-c1bb6.firebaseio.com",
      projectId: "multiplayer-rps-c1bb6",
      storageBucket: "multiplayer-rps-c1bb6.appspot.com",
      messagingSenderId: "709965254417"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  // Initial Values

  var numConnections = 0; // number of connections
  var name = "";
  var email = "";
  var age = 0;
  var comment = "";


  // All of our connections will be stored in this directory.
  var connectionsRef = database.ref("/connections");
  var connectedRef = database.ref(".info/connected");

  // When the client's connection state changes...
  connectedRef.on("value", function(snap) {
      // If they are connected..
      if (snap.val()) {
          // Add user to the connections list.
          var con = connectionsRef.push(true);
          // Remove user from the connection list when they disconnect.
          con.onDisconnect().remove();
      }
  });

  // When first loaded or when the connections list changes...
  connectionsRef.on("value", function(snap) {

      // The number of online users is the number of children in the connections list.
      // if less than 3 connections, I am a player
      // otherwise I am waiting to play and there are numChildren-2 waiting
      numConnections = (snap.numChildren());
      console.log(numConnections);

      if (numConnections < 3) {
          initializePlayer();
      } else {
          placeOnWaitlist();
      }
      //  $("#watchers").text(snap.numChildren());
  });

  function initializePlayer() {
      if (debug) { console.log("function initializePlayer: "); }

  }

  function placeOnWaitlist() {
      if (debug) { console.log("function placeOnWaitlist: "); }

  }



  // ========================================
  // Start Button Click
  $("#add-user").on("click", function(event) {
      event.preventDefault();


      // Don't forget to provide initial data to your Firebase database.
      name = $("#name-input").val().trim();
      email = $("#email-input").val().trim();
      age = $("#age-input").val().trim();
      comment = $("#comment-input").val().trim();

      // Code for the push
      dataRef.ref().push({

          name: name,
          email: email,
          age: age,
          comment: comment,
          dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
  });