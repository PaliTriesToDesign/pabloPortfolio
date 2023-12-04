import { updateCounter, decreaseProgressBar, roomTone, toggleMute } from "./functions.js";

const mute = document.getElementById('soundIcon');

window.onbeforeunload = updateCounter();
document.addEventListener("scroll", updateCounter);
document.addEventListener("scroll", decreaseProgressBar);

window.onbeforeunload = decreaseProgressBar();

mute.addEventListener('click', toggleMute);
document.addEventListener('load', roomTone);
