//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDInfXe_eGfW-qpRn8fMY6ApHH2OtGM2U8",
    authDomain: "kwier-bdeda.firebaseapp.com",
    databaseURL: "https://kwier-bdeda-default-rtdb.firebaseio.com",
    projectId: "kwier-bdeda",
    storageBucket: "kwier-bdeda.appspot.com",
    messagingSenderId: "220285792014",
    appId: "1:220285792014:web:7597631deb15bfd1a3315f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
        console.log(firebase_message_id);
        console.log(message_data);
        name = message_data['name'];
        message = message_data['message'];
        like = message_data['like'];
        name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'> </h4>";
        message_with_tag = "<h4 class='message_h4'> " + message + "</h4>";
        like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(thid.id)'>";
        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: "+ like + " </span> </button> </h4>"

        row = name_with_tag + message_with_tag +like_button +span_with_tag;
        document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();

function updateLike(message_id)
{
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    update_likes = Number(likes) + 1;
    console.log(update_likes);

    firebase.database().ref(room_name).child(message_id).update
    ({
          like : update_likes
    });
}
