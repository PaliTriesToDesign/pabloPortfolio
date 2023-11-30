// Progress Bar=======================
const altitude = document.querySelector('.altitude-value');
const progressBar = document.querySelector('.progress-inner');


// PROGRESS BAR===================
export function increaseProgressBar() {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const progress = 100 - (scrollTop / scrollableHeight) * 100;
  
    progressBar.style.display = "block";
    progressBar.style.width = progress + "%";
}

export function decreaseProgressBar() {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const progress = 100 - (scrollTop / scrollableHeight) * 100;
  
    progressBar.style.display = "block";
    progressBar.style.width = progress + "%";
    console.log(progress);
}

export function updateCounter() {
    let currentScrollPos = window.scrollY;
    console.log(currentScrollPos)
    let maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    let altitudeValue = maxScrollHeight - currentScrollPos;
  
    if(altitudeValue < 1000){
      altitude.textContent = `${Math.floor(altitudeValue) * 1}m`;
    } else if(altitudeValue >= 1000) {
      altitude.textContent = `${Math.floor(altitudeValue) * 1}km`;
    }
  
    if(altitudeValue < 0){
      altitude.textContent = `0m`;
    }
  }


//END OF PROGRESS BAR===================


// MUTE ICON======================
export function soundIcon() {
  bleepSound();
  let roomTone = document.getElementById('roomTone');
  let soundIcon = document.getElementById("soundIcon");
  let rocketLaunchSound = document.getElementById('rocketLaunchSound');
  
  if (roomTone.paused) {
    roomTone.play();
    soundIcon.innerHTML = `<i class="fa-solid fa-volume-high mute-icon"></i>`
    soundIcon.style.opacity = 1;
  } else {
    roomTone.pause();
    soundIcon.innerHTML = `<i class="fa-solid fa-volume-xmark mute-icon"></i>`
    soundIcon.style.opacity = 0.5;

    rocketLaunchSound.pause();
    rocketLaunchSound.currentTime = 0;
  }
}

//END OF MUTE ICON======================

// SOUND FX
export function bleepSound(){
  let bleepSound = document.getElementById('bleepSound');
  bleepSound.play();
}

export function wrongActionSound(){
  let wrongActionSound = document.getElementById('wrongActionSound');
  wrongActionSound.play();
}

export function rocketLaunchSound(){
  let rocketLaunchSound = document.getElementById('rocketLaunchSound');
  rocketLaunchSound.play();
}

export function pauseRocketLaunchSound(){
  let rocketLaunchSound = document.getElementById('rocketLaunchSound');
  rocketLaunchSound.pause();
  rocketLaunchSound.currentTime = 0;
}

export function roomTone() {
  let roomTone = document.getElementById('roomTone');
  roomTone.play();
}
// END OF SOUND FX
