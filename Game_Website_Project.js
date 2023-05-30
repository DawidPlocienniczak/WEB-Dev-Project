const player = document.getElementById("soundPlayer");
const button = document.getElementById("soundButton");
let isClicked = false;


function playSound() {
    if (isClicked) {
        isClicked = false;
        player.play()
        button.innerHTML = "Stop Music";
    } else {
        isClicked = true;
        player.pause()
        player.currentTime = 0
        button.innerHTML = "Play Music";
    }
}