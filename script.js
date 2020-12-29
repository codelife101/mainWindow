 let audio = new Audio('win.m4a');
 


function enter(){
    $(".enterContainer").css("display","none");
    $(".contentContainer").css("display","flex");

}


function submit(){
    var x = document.forms["keyCode"]["answer"].value;
if (x.length < 1) {
  alert("get outta here");   
} 
else if (x =="2784"){
    audio.play();
    $(".contentContainer").css("display","none");
    $(".stampLocation").css("display","flex");
} else{
    alert("try again");
}
}