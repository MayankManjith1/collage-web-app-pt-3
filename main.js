var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
    speak();
} 

Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );


function speak(){

    var synth = window.speechSynthesis;
    speak_data = "Taking your next selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);



}


setTimeout(function()
{
    var synth = window.speechSynthesis;
    img_id = "selfie1";
    take_snapshot();
    speak_data = "Taking your next selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

}, 10000);

setTimeout(function()
{
    var synth = window.speechSynthesis;
    img_id = "selfie2";
    take_snapshot();
    speak_data2 = "Taking your next selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data2);
    synth.speak(utterThis);

}, 15000);

setTimeout(function()
{
    var synth = window.speechSynthesis;
    img_id = "selfie3";
    take_snapshot();

}, 20000);

function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri)
    {
        if(img_id=="selfie1")
        {
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }

        if(img_id=="selfie2")
        {
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
        }

        if(img_id=="selfie3")
        {
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
        }

    });
}