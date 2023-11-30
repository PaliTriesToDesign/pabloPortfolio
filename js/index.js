import { increaseProgressBar, updateCounter, soundIcon, bleepSound, wrongActionSound, rocketLaunchSound, pauseRocketLaunchSound} from "./functions.js";

// Loader=========================
const loaderScreen = document.getElementById('loaderScreen');
const nameForm = document.getElementById('nameForm');
const nameLabel = document.getElementById('nameLabel');
const nameInput = document.getElementById('nameInput');
const nameButton = document.getElementById('nameButton');
const loaderStarship = document.getElementById('loaderStarship');
let userName = "";

// CONTACT ME=====================
const contactMeTitle = document.getElementById('contactMeTitle');
// END OF CONTACT ME=====================


// STARSHIP=======================
const starshipSystem = document.getElementById('starshipSystem');
const starship = document.getElementById('starship');
const booster = document.getElementById('booster');
const landingPad = document.getElementById('landingPad');

// PROGRESS BAR==================
const mute = document.getElementById('soundIcon');
// const scrollUp = document.getElementById('scrollUp');


// STARSHIP ROTATING==============
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
    
    if(altitudeValue > 1) {
        rocketLaunchSound();
    } else {
        pauseRocketLaunchSound();
    }
    
    if(altitudeValue > 6500) {
      starship.classList.remove('rotating');
      booster.classList.remove('rotating');
  
      landingPad.classList.add('expanded')
    } else if(altitudeValue < 6000) {
      landingPad.classList.remove('expanded');
    }
  
  
   //Adds or removes blinking scroll up arrow 
    if(altitudeValue > 100){
      scrollUp.style.display = 'none';
    } else {
      scrollUp.style.display = 'block';
    }
  }
  
window.addEventListener("scroll", starshipRotating);
//END OF STARSHIP ROTATING==============

//LOADER FORM==============
function slideLoaderOut() {
    loaderStarship.style.opacity = 0;
    loaderScreen.classList.add('slided-out');
}
  
  function hideLoader() {
    loaderScreen.classList.add('visually-hidden')
}

nameForm.addEventListener('submit', function(e) {
    e.preventDefault();
  });

  nameButton.addEventListener('click', function() {
    userName = nameInput.value;
  
    if(userName == ""){
        wrongActionSound();

        nameLabel.style.color = `#EC5663`;
        nameLabel.innerText = `Don't forget your name:`;
        loaderStarship.classList.remove('loader-slide-out');
        loaderStarship.children[0].classList.remove
        ('rotating');

    } else {
        bleepSound();
        // setTimeout(rocketLaunchSound, 300);

      // Updates elements in the loader div
      loaderStarship.classList.add('loader-slide-out');
      loaderStarship.children[0].classList.add('rotating');
      nameLabel.innerText = `Welcome, ${userName}!`;
      nameLabel.style.color = `#FFF`;
      setTimeout(slideLoaderOut, 2000);
      setTimeout(hideLoader, 3000);
    // ABOUT ME
        aboutMeGreeting.innerHTML = `Hey, ${userName}!`

    // CONTACT ME=====================
        contactMeTitle.innerText = `Let's talk about more projects, ${userName}! c:`;
    }
  });

//END OF LOADER FORM==============

// PROGRESS BAR=================
document.addEventListener("scroll", increaseProgressBar);

    // ALTITUDE=====================
window.addEventListener("scroll", updateCounter);
updateCounter();

    // MUTE=======================
    mute.addEventListener('click', soundIcon);
    document.addEventListener('load', roomTone);

// END OF PROGRESS BAR=================

// SCROLL TO THE BOTTOM
window.onbeforeunload = function () {
    window.scrollTo(0, document.body.scrollHeight);
}

window.onload = function () {
    window.scrollTo(0, document.body.scrollHeight);
}
// END OF SCROLL TO THE BOTTOM