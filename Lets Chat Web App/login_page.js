function addUser(){
    user_name = document.getElementById("user_name").value;
    password = document.getElementById("password").value;
    localStorage.setItem("password", password);
    localStorage.setItem("user_name", user_name);
    
    if (password == ""){
        window.alert("you need to add password before signing up!");
    }
    else{
        window.location="chat_room.html";
    }
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    key_pressed = e.keyCode;
    if (key_pressed == '13'){
       addUser();
    }
}