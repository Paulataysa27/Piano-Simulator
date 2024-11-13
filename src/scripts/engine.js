const pianoKeys = document.querySelectorAll(".piano-keys .key");

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = () =>{
    pianoKeys.forEach(Key => Key.classList.toggle("hide"))
}

const volumeSlider = document.querySelector(".volume-slider input")

const KeysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];

let audio = new Audio("src/tunes/a.wav");

const playTune = (Key) => { 
    audio.src = `src/tunes/${Key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${Key}"]`)
    clickedKey.classList.add("active")
    setTimeout(()=>{
        clickedKey.classList.remove("active")},150)
}

pianoKeys.forEach((Key) =>{
    console.log(Key.dataset.key);
    Key.addEventListener("click", () => playTune(Key.dataset.key));
    mapedKeys.push(Key.dataset.key)
});

document.addEventListener("keydown",(e) => {

    if(mapedKeys.includes(e.Key)){
        playTune(e.key)
    } 
});



volumeSlider.addEventListener("input", handleVolume);

KeysCheck.addEventListener("click", showHideKeys);