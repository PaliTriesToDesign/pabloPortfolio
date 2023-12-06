import {getScrollPercentage, increaseProgressBar, updateCounter, bleepSound, wrongActionSound, toggleMute, roomTone, updateStageTitle, disableScroll, enableScroll} from "./functions.js";


// Loader=========================
const loaderScreen = document.getElementById('loaderScreen');
const nameForm = document.getElementById('nameForm');
const nameLabel = document.getElementById('nameLabel');
const nameInput = document.getElementById('nameInput');
const nameButton = document.getElementById('nameButton');
const loaderStarship = document.getElementById('loaderStarship');
let userName = "";
let isLoaderOnScreen = true;

// CONTACT ME=====================
const contactMeTitle = document.getElementById('contactMeTitle');

// (function() {
//     // https://dashboard.emailjs.com/admin/account
//     emailjs.init('service_gm1wdkd');
// })();

// window.onload = function() {
//     document.getElementById('contactMeForm').addEventListener('submit', function(event) {
//         event.preventDefault();
//         // generate a five digit number for the contact_number variable
//         this.contact_number.value = Math.random() * 100000 | 0;
//         // these IDs from the previous steps
//         emailjs.sendForm('contact_service', 'contactMeForm', this)
//             .then(function() {
//                 console.log('SUCCESS!');
//             }, function(error) {
//                 console.log('FAILED...', error);
//             });
//     });
// }
// END OF CONTACT ME=====================


// STARSHIP=======================
const starshipSystem = document.getElementById('starshipSystem');
const starship = document.getElementById('starship');
const booster = document.getElementById('booster');
const landingPad = document.getElementById('landingPad');
let canSeparate = false;
let isFlying = false;
let isSeparated = false;


// SCROLL TO THE BOTTOM
window.onbeforeunload = function () {
  window.scrollTo(0, document.body.scrollHeight);
};

// window.onload = roomTone();

window.onload = function () {
  window.scrollTo(0, document.body.scrollHeight);
}
// END OF SCROLL TO THE BOTTOM


// PROGRESS BAR==================
const mute = document.getElementById('soundIcon');
// const scrollUp = document.getElementById('scrollUp');

// GET SCROLL PERCENTAGE==========
window.addEventListener('scroll', getScrollPercentage);
let scrollPercentage = getScrollPercentage();

// CREATE FIRE ELEMENT============
let starshipFire = document.createElement('div');
starshipFire.classList.add('flames-wrapper-starship')
starshipFire.innerHTML = `<div class="container">
  <div class="red flame"></div>
  <div class="white flame"></div>
  <div class="blue circle"></div>
  <div class="black circle"></div>
</div>`;

let boosterFire = document.createElement('div');
boosterFire.classList.add('flames-wrapper')
boosterFire.innerHTML = `<div class="container">
  <div class="red flame"></div>
  <div class="white flame"></div>
  <div class="blue circle"></div>
  <div class="black circle"></div>
</div>`;

let boosterAndFlames = document.getElementById('boosterAndFlames');
let starshipAndFlames = document.getElementById('starshipAndFlames');

function appendStarshipFire(){
  starshipAndFlames.appendChild(starshipFire);
}

function appendBoosterFire(){
  boosterAndFlames.appendChild(boosterFire);
}

function removeBoosterFire(){
  boosterAndFlames.remove();
}
//END OF CREATE FIRE ELEMENT======



// STAGE SEPARATION===============

function stageSeparation(){

    scrollPercentage  = getScrollPercentage();

    if(scrollPercentage > 95){
      canSeparate = true;
    }

    if(scrollPercentage < 30 && canSeparate === true){
      starship.parentElement.classList.add('stage-separation');
      boosterAndFlames.classList.add('stage-separation');

      isSeparated = true;

        setTimeout(function() {
            boosterAndFlames.remove();
        }, 6000);

        setTimeout(function() {
          appendStarshipFire();
        }, 2450);
    }; 
};

window.addEventListener("scroll", stageSeparation);

let isStarshipOn = false;

// STARSHIP ROTATING==============
function starshipRotating() {
    let currentScrollPos = window.scrollY;
    let maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    let altitudeValue = maxScrollHeight - currentScrollPos;
  
    if(altitudeValue > 1){
      starship.classList.add('rotating');
      booster.classList.add('rotating');
      
      isStarshipOn = true;
      if(isSeparated === false && isStarshipOn === true && isLoaderOnScreen === false) {
        appendBoosterFire();
      }
    } else {
      starship.classList.remove('rotating');
      booster.classList.remove('rotating');
      boosterFire.remove();
    };

    if(altitudeValue === 0){
      isFlying = true;
    };
    
    if(scrollPercentage <= 5 && canSeparate === true && isLoaderOnScreen === false) {
      starshipSystem.classList.add('flying-out');
      
      setTimeout(function() {
        starshipAndFlames.remove();
      }, 4000)
    } 
    
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
    let currentScrollPos = window.scrollY;
    let maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    let altitudeValue = maxScrollHeight - currentScrollPos;
    userName = nameInput.value;
  
    if(userName == ""){
        wrongActionSound();

        nameLabel.style.color = `#EC5663`;
        nameLabel.innerText = `Don't forget your name:`;
        loaderStarship.classList.remove('loader-slide-out');
        loaderStarship.children[0].classList.remove
        ('rotating');

    } else if(userName.trim() !== "" && maxScrollHeight) {
        bleepSound();
        // setTimeout(rocketLaunchSound, 300);

        // Updates elements in the loader div
        loaderStarship.classList.add('loader-slide-out');
        loaderStarship.children[0].classList.add('rotating');
        nameLabel.innerText = `Welcome, ${userName}!`;
        nameLabel.style.color = `#FFF`;
        setTimeout(slideLoaderOut, 2000);
        setTimeout(hideLoader, 3000);
        isLoaderOnScreen = false;
        enableScroll();

        // ABOUT ME
        aboutMeGreeting.innerHTML = `Hey, ${userName}!`

        // CONTACT ME=====================
        contactMeTitle.innerText = `Let's talk about more projects, ${userName}! c:`;
    }
  });
//END OF LOADER FORM==============

// PROGRESS BAR=================
    document.addEventListener("scroll", increaseProgressBar);

    // ALTITUDE===================
    window.addEventListener("scroll", updateCounter);
    updateCounter();

    // STAGE TITLE================
    window.addEventListener('scroll', updateStageTitle)

    // MUTE=======================
     mute.addEventListener('click', toggleMute);
    document.addEventListener('load', roomTone);

// END OF PROGRESS BAR=================


// DISABLE SCROLL=================
if(scrollPercentage > 90){
  disableScroll();
} else {
  enableScroll();
}
