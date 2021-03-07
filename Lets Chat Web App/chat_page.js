
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDLkfuGYldUO4z9HMyiThCfK_N45knuNlE",
    authDomain: "lets-chat-web-app-f8ba7.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-f8ba7-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-f8ba7",
    storageBucket: "lets-chat-web-app-f8ba7.appspot.com",
    messagingSenderId: "1028159376890",
    appId: "1:1028159376890:web:d523e616cada861b9be843"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
            name: user_name,
            msg: msg,
            like: 0
          });
      document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         namee = message_data['name'];
         message = message_data['msg'];
         like = message_data['like'];
         name_with_tag = "<h4>" + namee + "<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
         like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLikes(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> like: " + like + "</span></button><hr>";
         row = name_with_tag + message_with_tag + like_button + span_with_tag;
         document.getElementById("output").innerHTML += row;
      } 
}); 
});
}
getData();

function updateLikes(message_id){
     console.log("clicked on like button -" + message_id);
     button_id = message_id;
     likes = document.getElementById(button_id).value;
     updated_likes = Number(likes) + 1;
     console.log(updated_likes);

     firebase.database().ref(room_name).child(message_id).update({
        like: updated_likes
     });
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="login_page.html";
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    key_pressed = e.keyCode;
    if (key_pressed == '13'){
       send();
    }
}
