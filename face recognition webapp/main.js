prediction_1 = "";
prediction_2 = "";

Webcam.set({
   width: 350,
   height: 300,
   image_format: 'png',
   png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML = "<img id='capture_img' src='"+data_uri+"'/>";
    });
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6ei9Gcli4/model.json", model_loaded);

function model_loaded(){
    console.log("model loaded");
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "the first prediction is" + prediction_1;
    speak_data_2 = "and the second prediction is" + prediction_2;
    var utter_this = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utter_this);
}

function check(){
    img = document.getElementById("capture_img");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error){
       console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_emotion_name1"),innerHTML = results[0].label;
        document.getElementById("result_emotion_name2"),innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();

        if (results[0].label == "me"){
           document.getElementById("update_emoji1").innerHTML = "&#128102;";
        }

        if (results[0].label == "sister"){
            document.getElementById("update_emoji1").innerHTML = "&#128103;";
         }

        if (results[0].label == "dad"){
            document.getElementById("update_emoji1").innerHTML = "&#128104;";
         }

         if (results[0].label == "mom"){
            document.getElementById("update_emoji1").innerHTML = "&#128105;";
         }

         if (results[1].label == "me"){
            document.getElementById("update_emoji2").innerHTML = "&#128102;";
         }
 
         if (results[1].label == "sister"){
             document.getElementById("update_emoji2").innerHTML = "&#128103;";
          }
 
         if (results[1].label == "dad"){
             document.getElementById("update_emoji2").innerHTML = "&#128104;";
          }

          if (results[1].label == "mom"){
            document.getElementById("update_emoji2").innerHTML = "&#128105;";
         }
    }
}