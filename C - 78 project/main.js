var names = ["Amit Singhal", "Surabhi Singhal", "Bhuvi Singhal", "Saarvin Singhal", "Singhals"];
var images = ["PAPA PHOTO.jpg", "mumma.jpeg", "bhuvi.jpg", "me.jpg", "family.jpg"];

var i=0;

function next(){
    document.getElementById("family_h").innerHTML = names[i];
    document.getElementById("family").src = images[i];
    i++;
    if (i==5)
    {
        i=0;
    }
}