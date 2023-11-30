import { updateCounter, decreaseProgressBar, soundIcon } from "./functions.js";

const mute = document.getElementById('soundIcon');

window.onbeforeunload = updateCounter();
document.addEventListener("scroll", updateCounter);
document.addEventListener("scroll", decreaseProgressBar);

window.onbeforeunload = decreaseProgressBar();

mute.addEventListener('click', soundIcon);
