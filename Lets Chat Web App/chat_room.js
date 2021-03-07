
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
document.getElementById("username").innerHTML = "Welcome " + user_name + " !";

function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location="chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("room_name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
    });
 });
}
    getData();
    
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="chat_page.html";
}

function logout(){
   localStorage.removeItem("room_name");
   localStorage.removeItem("user_name");
   window.location="login_page.html"; 
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
  key_pressed = e.keyCode;
  if (key_pressed == '13'){
     addRoom();
  }
}