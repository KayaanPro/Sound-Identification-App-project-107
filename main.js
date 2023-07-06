function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = 
    ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/gqZb6gyk0/model.json', modelReady);
};

function modelReady(){
    classifier.classify(gotResults);
  }
    dog = 0;
    cat = 0;
    lion = 0;
    cow = 0;

    function gotResults(error, results)
    {}



