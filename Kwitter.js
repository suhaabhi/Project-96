user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    })

    localStoragr.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData {document.getElementsById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot { childKey = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - " + Room_names) ;
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"<div> <hr>";
    document.getElementById("output").innerHTML += row;
   });
  });
}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace = ("kwitter.html");
}

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:use_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}

firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0,
});