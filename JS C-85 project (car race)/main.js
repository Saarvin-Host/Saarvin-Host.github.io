canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 150;
car1_height = 70;

car2_width = 150;
car2_height = 100;

car1_x = 10;
car1_y = 10;

car2_x = 10;
car2_y = 100;

background_img = "racing.jpg";
car1_img = "car1.png";
car2_img = "car2.png"

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = upload_background;
    background_imgTag.src = background_img;

    car1_imgTag = new Image();
    car1_imgTag.onload = upload_car1;
    car1_imgTag.src = car1_img;

    car2_imgTag = new Image();
    car2_imgTag.onload = upload_car2;
    car2_imgTag.src = car2_img;
}

function upload_background() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function upload_car1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function upload_car2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    key_pressed = e.keyCode;
    console.log(key_pressed);

    if (key_pressed == '37'){
        car1_left();
        console.log("left");
    }
    if (key_pressed == '39'){
        car1_right();
        console.log("right");
    }

    if (key_pressed == '65'){
        car2_left();
        console.log("left");
    }
    if (key_pressed == '68'){
        car2_right();
        console.log("right");
    }
}

function car1_left(){
    if (car1_x >= 0){
        car1_x = car1_x - 10;
        console.log("When left arrow key is pressed, x = " + car1_x + " y = " + car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function car1_right(){
    if (car1_x <= 650){
        car1_x = car1_x + 10;
        console.log("When right arrow key is pressed, x = " + car1_x + " y = " + car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function car2_left(){
    if (car2_x >= 0){
        car2_x = car2_x - 10;
        console.log("When 'A' key is pressed, x = " + car2_x + " y = " + car2_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function car2_right(){
    if (car2_x <= 650){
        car2_x = car2_x + 10;
        console.log("When 'D' key is pressed, x = " + car2_x + " y = " + car2_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}
