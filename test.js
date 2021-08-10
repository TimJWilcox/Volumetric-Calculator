

function Volume(volumetricFactor){
    let pieces = document.getElementById("txtPieces").value
    let length = document.getElementById("txtLength").value
    let breadth = document.getElementById("txtBreadth").value
    let height = document.getElementById("txtHeight").value
    let answer =((length * height * breadth)/volumetricFactor) * pieces
    let answerA = +((answer).toFixed(2)) + 'kg'


    
    let volumeAnswer = document.getElementById("VolumeAnswer");
    if (volumeAnswer) {
        volumeAnswer.innerHTML = answerA;
    } else {
        let textAnswer = document.createTextNode(answerA)
        let h3 = document.createElement('h3')
        h3.setAttribute('id', 'VolumeAnswer')
        h3.appendChild(textAnswer)
        document.getElementById('VolumeAnswerContainer').appendChild(h3)
    }  
}

function selectVolumeFunction(){
    let selectedVolume = document.getElementById("volumeOption").value
    let volumetricFactor = selectedVolume.split(':')[0];
    return Volume(volumetricFactor);
}







