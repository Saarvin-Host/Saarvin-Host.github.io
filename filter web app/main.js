noseX = 0;
noseY = 0;

function preload(){
    image = loadImage('https://i.postimg.cc/gkMFP9Wx/7b12ee7981832c8f929b7871ac4372c6.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPoses);
}
 
function take_snapshot(){
    save('this_photo_is_very_stupid.png');
}
function modelLoaded(){
    console.log('posenet is initialized');
}

function gotPoses(results){
    if (results.length > 0){
       console.log(results);
       console.log("nose x = " + results[0].pose.nose.x);
       console.log("nose y = " + results[0].pose.nose.y);
       noseX = results[0].pose.nose.x-20;
       noseY = results[0].pose.nose.y;
    }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(image, noseX, noseY, 50, 30);
}