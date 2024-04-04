// Progress Bar=======================
const altitude = document.querySelector('.altitude-value');
const progressBar = document.querySelector('.progress-inner');
let stagesNames = ['Lift Off', 'About', 'Projects', 'Staging','Contact'];
const stageName = document.getElementById('stageTitle');

// GET SCROLL PERCENTAGE
export function getScrollPercentage(){
  let h = document.documentElement, 
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';

  let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;

  // console.log(Math.floor(percent) + `%`);
  return Math.floor(percent)
}
// END OF GET SCROLL PERCENTAGE


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
    // console.log(progress);
}

export function updateCounter() {
    let currentScrollPos = window.scrollY;
    // console.log(currentScrollPos)
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


export function updateStageTitle() {
  let currentScrollPos = window.scrollY;
    let maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    let altitudeValue = maxScrollHeight - currentScrollPos;

    if (altitudeValue < 1500) {
      stageName.innerText = `${stagesNames[0]}`;
    } else if (altitudeValue <= 3500) {
      stageName.innerText = `${stagesNames[1]}`;
    } else if (altitudeValue <= 4500) {
      stageName.innerText = `${stagesNames[2]}`;
    } else if (altitudeValue <= 6500) {
      stageName.innerText = `${stagesNames[3]}`;
    } else {
      stageName.innerText = `${stagesNames[4]}`;
    }
}

//END OF PROGRESS BAR===================


// MUTE ICON======================
export function toggleMute() {
  bleepSound();

  let roomTone = document.getElementById('roomTone');
  let soundIcon = document.getElementById("soundIcon");
  
  if (roomTone.paused) {
    roomTone.play();
    soundIcon.innerHTML = `<i class="fa-solid fa-volume-high mute-icon"></i>`
    soundIcon.style.opacity = 1;
  } else {
    roomTone.pause();
    soundIcon.innerHTML = `<i class="fa-solid fa-volume-xmark mute-icon"></i>`
    soundIcon.style.opacity = 0.5;
  }

  // Get all audio elements on the page
  const audioElements = document.querySelectorAll('audio');

  // Iterate through each audio element and toggle the muted property
  audioElements.forEach(audio => {
      audio.muted = !audio.muted;
  });
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

export function roomTone() {
  let roomTone = document.getElementById('roomTone');
  roomTone.play();
}
// END OF SOUND FX


// DISABLE SCROLL=================
export function disableScroll() {
  // Get the current page scroll position
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  let scrollLeft = window.scrollX || document.documentElement.scrollLeft;

      // if any scroll is attempted, set this to the previous value
      window.onscroll = function() {
          window.scrollTo(scrollLeft, scrollTop);
      };

      console.log("Scroll Disabled");
}

export function enableScroll() {
  window.onscroll = function() {
    
  };
}
// END OF DISABLE SCROLL==========

// MAGNETO=========================
const magneto = document.querySelectorAll('.magneto');

// Mouse Move event
const activateMagneto = (e) => {
  let boundBox;
  let newX;
  let newY;
    magneto.forEach(magneto => {
      boundBox = magneto.getBoundingClientRect();
      newX = ((e.clientX - boundBox.left) / magneto.offsetWidth) - 0.5;
      newY = ((e.clientY - boundBox.top) / magneto.offsetHeight) - 0.5;
    });
    let magnetoStrength = 40;

    // Move button to new position
    gsap.to(magneto, {
        duration: 1,
        x: newX * magnetoStrength,
        y: newY * magnetoStrength,
        ease: Power4.easeOut
    })
}

// Mouse Leave event
const resetMagneto = (e) => {

    // Move button to original position
    gsap.to(magneto, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    })
}

// Add Event Listeners
magneto.forEach(magneto => {
    magneto.addEventListener('mousemove', activateMagneto);
    magneto.addEventListener('mouseleave', resetMagneto);
})
