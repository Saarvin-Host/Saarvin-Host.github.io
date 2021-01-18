function getPara1(){
   var para1 = [];
   for (var i=1; i<=5; i++){
       para1.push(document.getElementById("div1_input" + i).value);
   }
   document.getElementById("show_para1").innerHTML = para1.join(".");
}

function getPara2(){
    var para2 = [];
    for (var i=1; i<=5; i++){
        para2.push(document.getElementById("div2_input" + i).value);
    }
    document.getElementById("show_para2").innerHTML = para2.join(".");
 }