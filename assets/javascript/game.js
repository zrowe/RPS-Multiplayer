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

  var dataRef = firebase.database();

  