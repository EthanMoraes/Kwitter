const firebaseConfig = {
      apiKey: "AIzaSyAYQ3BsMTpkENzD2B-47iFIrWkHKMSHicg",
      authDomain: "kwitter-c7816.firebaseapp.com",
      databaseURL: "https://kwitter-c7816-default-rtdb.firebaseio.com",
      projectId: "kwitter-c7816",
      storageBucket: "kwitter-c7816.appspot.com",
      messagingSenderId: "1018936717814",
      appId: "1:1018936717814:web:b6fbb297503d673422d7d7"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
