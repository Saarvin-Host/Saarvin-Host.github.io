function preload(){

}

function setup(){
    canvas = createCanvas(640,480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 60, 60, 510, 350);
    fill(222, 72, 27);
    stroke(0, 0, 0);
    circle(50, 50, 70);

    fill(222, 72, 27);
    stroke(0, 0, 0);
    circle(50, 420, 70);

    fill(222, 72, 27);
    stroke(0, 0, 0);
    circle(580, 420, 70);

    fill(222, 72, 27);
    stroke(0, 0, 0);
    circle(580, 50, 70);

    fill(245, 10, 10);
    stroke(0, 0, 0);
    rect(85, 40, 460 ,20);

    
    fill(245, 10, 10);
    stroke(0, 0, 0);
    rect(85, 410, 460 ,20);

    fill(245, 10, 10);
    stroke(0, 0, 0);
    rect(42, 85, 20 ,300);

    fill(245, 10, 10);
    stroke(0, 0, 0);
    rect(570, 85, 20 ,300);
}

function take_snapshot(){
    save('photo_frame.png');
}