var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();
selfie1="";
selfie2="";
selfie3="";
image_id="";

function start(){
    speak();
}





camera = document.getElementById("camera");
 Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});
 
function speak(){
 
    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    setTimeout(function() {
         var image_id=selfie1;
        take_snapshot();
        speak_data = "Taking your next Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    },5000);
    setTimeout(function() {
        var image_id=selfie2;
        take_snapshot();
        speak_data = "Taking your next Selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    },10000);
    setTimeout(function() {
         var image_id=selfie3;
        take_snapshot();
        speak_data = "Taking your next Selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    },15000);
}
  function take_snapshot(){
  
    console.log("image_id");

    Webcam.snap(function(data_uri){
        if(image_id =="selfie_1"){
            document.getElementById("result1").innerHTML="<img id='selfie1' src='"+data_uri+"'/>";
        }
        if(image_id =="selfie_2"){
            document.getElementById("result2").innerHTML="<img id='selfie2' src='"+data_uri+"'/>";
        }
        if(image_id =="selfie_3"){
            document.getElementById("result3").innerHTML="<img id='selfie3' src='"+data_uri+"'/>";
        }
    });
  }     
    
    
        

    


