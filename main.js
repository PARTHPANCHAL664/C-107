function start()
{
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/iALoC-kkE/model.json' , modelReady);
}
function modelReady(){

    classifier.classify(gotResult);
}
function gotResult(error , result)
{
    console.log(result);
}







