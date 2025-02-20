function starClasification ()
{
    navigator.mediaDevices.getUserMedia({audio: true});https://teachablemachine.withgoogle.com/models/v5Kce0Gai//
    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/v5Kce0Gai/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error) {
        console.error(error);
      } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
        document.getElementById("result_label").innerHTML = 'Escucho:  '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Precisión:  '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    
        img = document.getElementById('Balazos') 
        img1 = document.getElementById('Claxon')
        img2 = document.getElementById('Gritos')
        img3 = document.getElementById('Motor')
        img4 = document.getElementById('Perro_ladrando')
    
        if (results[0].label == "Balazos") {
          img.src = 'Balazos_mov.gif';
          img1.src = 'Claxon.png';
          img2.src = 'Gritos.webp';
          img3.src = 'Motor.webp';
          img4.src = 'Perro_ladrando.png'
        } else if (results[0].label == "Claxon") {
          img.src = 'Balazos.webp';
          img1.src = 'Claxon_mov.gif';
          img2.src = 'Gritos.webp';
          img3.src = 'Motor.webp'
          img4.src = 'Perro_ladrando.png';
        } else if (results[0].label == "Gritos") {
          img.src = 'Balazos.webp';
          img1.src = 'Claxon.png';
          img2.src = 'Gritos_mov.gif';
          img3.src = 'Motor.webp'
          img4.src = 'Perro_ladrando.png';
        } else if (results[0].label == "Motor") {
          img.src = 'Balazos.webp';
          img1.src = 'Claxon.png';
          img2.src = 'Gritos.webp';
          img3.src = 'Motor_mov.gif'
          img4.src = 'Perro_ladrando.png';
        } else if (results[0].label == "Perros") {
            img.src = 'Balazos.webp';
            img1.src = 'Claxon.png';
            img2.src = 'Gritos.webp';
            img3.src = 'Motor.webp';
            img4.src = 'Perro_ladrando_mov.gif';
        }else{
          img.src = 'Balazos.webp';
          img1.src = 'Claxon.png';
          img2.src = 'Gritos.webp';
          img3.src = 'Motor.webp'
          img4.src = 'Perro_ladrando.png';
        }
      }
}