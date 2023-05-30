const player = document.getElementById("soundPlayer");
const button = document.getElementById("soundButton");
let isClicked = false;
player.loop=true; /*This line allows me to loop the music when it is activated by the user */

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