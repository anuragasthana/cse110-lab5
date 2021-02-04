// main.js

// TODO

let vol_number = document.getElementById("volume-number");
let vol_slider = document.getElementById("volume-slider");
let horn_sound = document.getElementById("horn-sound");
let vol_indicator = document.getElementById("volume-image");
let sound_image = document.getElementById("sound-image");
let audio_select = document.getElementById("audio-selection");
let submit = document.getElementById("party-horn-form");

vol_number.addEventListener("input", changeVolWithNum);
vol_slider.addEventListener("input", changeVolWithSlide);
audio_select.addEventListener("change", changeSound);
submit.addEventListener("submit", playAudio);

function changeVolWithNum(event){
    let newVol = event.target.value
    if(newVol > 100){
        newVol = 100;
    } else if(newVol < 0){
        newVol = 0;
    }
    vol_number.value = newVol;
    if(newVol === ""){
        vol_slider.value = 0;
    } else{
        vol_slider.value = newVol;
    }
    changeVolume(newVol);
}

function changeVolWithSlide(event){
    let newVol = event.target.value
    vol_number.value = newVol;
    changeVolume(newVol);
}

function changeVolume(newVol){
    if(newVol > 66 && newVol <= 100){
        vol_indicator.src = "./assets/media/icons/volume-level-3.svg";
    } else if(newVol > 33 && newVol <= 66){
        vol_indicator.src = "./assets/media/icons/volume-level-2.svg";
    } else if(newVol > 0 && newVol <= 33){
        vol_indicator.src = "./assets/media/icons/volume-level-1.svg";
    } else{
        vol_indicator.src = "./assets/media/icons/volume-level-0.svg";
    }
    horn_sound.volume = newVol/100;
}

function changeSound(event){
    let target = event.target;
    let image;
    let audio;
    switch(target.id){
        case "radio-air-horn":
            image = "./assets/media/images/air-horn.svg";
            audio = "./assets/media/audio/air-horn.mp3";
            break;
        case "radio-car-horn":
            image = "./assets/media/images/car.svg";
            audio = "./assets/media/audio/car-horn.mp3";
            break;
        case "radio-party-horn":
            image = "./assets/media/images/party-horn.svg";
            audio = "./assets/media/audio/party-horn.mp3";
            break;
    }
    sound_image.src = image;
    horn_sound.src = audio;
}

function playAudio(event){
    event.preventDefault();
    horn_sound.play();
}