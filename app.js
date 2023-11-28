const bodyHeight = document.body.scrollHeight;

const follower = document.querySelector('.follower');

const project = document.getElementById('project');

// Progress Bar=======================
const progressBar = document.querySelector('.progress-inner');
const altitude = document.querySelector('.altitude-value');

// Starship=======================
const starshipSystem = document.getElementById('starshipSystem');
const starship = document.getElementById('starship');
const booster = document.getElementById('booster');

const landingPad = document.getElementById('landingPad');

// Sound Fx=======================
const mute = document.getElementById('soundIcon')

mute.addEventListener('click', function() {
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
})

//CURSOR=================


// PROJETCS=======================
project.addEventListener("mousemove", function(e){
  let top = e.offsetY;
  let left = e.offsetX;

  const previewImages = document.getElementById('previewImages');
  
  previewImages.style.top = `${top}px`;
  previewImages.style.left = `${left}px`;

  console.log(e.offsetY, e.clientY)
});

  

// PROGRESS BAR=================
document.addEventListener("scroll", function () {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const progress = 100 - (scrollTop / scrollableHeight) * 100;
  
    progressBar.style.display = "block";
    progressBar.style.width = progress + "%";

    
    // STARSHIP FOLLOWING SCROLL ===
    starship.style.top = `20px`;
});

  // ALTITUDE=====================
function updateCounter() {
  let currentScrollPos = window.scrollY;
  let maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  let altitudeValue = maxScrollHeight - currentScrollPos;

  if(altitudeValue < 1000){
    altitude.textContent = `${Math.floor(altitudeValue) * 1}m`;
  } else if(altitudeValue >= 1000) {
    altitude.textContent = `${Math.floor(altitudeValue) * 1}km`;
  }
}

  window.addEventListener("scroll", updateCounter);
  updateCounter(); // Call the function initially

// STARSHIO ROTATING==============
function starshipRotating() {
  let currentScrollPos = window.scrollY;
  let maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  let altitudeValue = maxScrollHeight - currentScrollPos;

  if(altitudeValue > 1){
    starship.classList.add('rotating');
    booster.classList.add('rotating');
  } else {
    starship.classList.remove('rotating');
    booster.classList.remove('rotating');
  }
  
  if(altitudeValue > 6500) {
    starship.classList.remove('rotating');
    booster.classList.remove('rotating');

    landingPad.classList.add('expanded')
  } else if(altitudeValue < 6000) {
    landingPad.classList.remove('expanded');
  }
}

window.addEventListener("scroll", starshipRotating);
starshipRotating();

  // use localstorage to store a flag for the first time
  // if user opened website first time
  // then scroll at the bottom
  // else do nothing
  window.onbeforeunload = function () {
    window.scrollTo(0, document.body.scrollHeight);
  }
