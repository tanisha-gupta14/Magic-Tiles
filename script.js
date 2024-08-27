

const volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

const keys = document.querySelectorAll('.key');
const audioElements = document.querySelectorAll('audio');

let allKeys = ['a', 'w', 's', 'e', 'd', 'r', 'f', 't', 'g', 'y', 'h', 'u', 'j']; // Updated

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key));
});

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add('active');
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    });
}

function handleVolume(e) {
    audioElements.forEach(audio => {
        audio.volume = e.target.value;
    });
}

function showHideKeys() {
    keys.forEach(key => key.classList.toggle("hide"));
}

function pressedKey(e) {
    if (allKeys.includes(e.key)) playNote(
        Array.from(keys).find(key => key.querySelector('span').textContent === e.key)
    );
}

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
