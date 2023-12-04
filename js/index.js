import { increaseProgressBar, updateCounter, bleepSound, wrongActionSound, rocketLaunchSound, secondStageSound, pauseRocketLaunchSound, toggleMute, roomTone} from "./functions.js";

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

(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('service_gm1wdkd');
})();

window.onload = function() {
    document.getElementById('contactMeForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contactMeForm', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}
// END OF CONTACT ME=====================


// STARSHIP=======================
const starshipSystem = document.getElementById('starshipSystem');
const starship = document.getElementById('starship');
const booster = document.getElementById('booster');
const landingPad = document.getElementById('landingPad');
let canSeparate = false;
let isFlying = false;
let isSeparated = false;

// PROGRESS BAR==================
const mute = document.getElementById('soundIcon');
// const scrollUp = document.getElementById('scrollUp');


// STAGE SEPARATION===============
function stageSeparation(){
    let currentScrollPos = window.scrollY;
    let maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    let altitudeValue = maxScrollHeight - currentScrollPos;

    if(altitudeValue === 0){
      canSeparate = true;
    }
    console.log(canSeparate);

    setTimeout(function() {
        if(altitudeValue > 4600 && canSeparate === true && isLoaderOnScreen  === false){
            secondStageSound();
            starship.parentElement.classList.add('stage-separation');
            booster.parentElement.classList.add('stage-separation');
    
            setTimeout(function() {
                booster.parentElement.remove();
            }, 8000);
        };
    }, 1000);

};

window.addEventListener("scroll", stageSeparation);


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
    };

    if(altitudeValue === 0){
      isFlying = true;
    };
    
    if(altitudeValue > 1 && isFlying === true && isLoaderOnScreen === false) {
        rocketLaunchSound();
    } else {
        pauseRocketLaunchSound();
    };

    if(isFlying === true){
      setTimeout(function() {
        isFlying = false;
      }, 18000);
    };
    
    if(altitudeValue > 6500) {
      starship.classList.remove('rotating');
      booster.classList.remove('rotating');
  
      landingPad.classList.add('expanded')
    } else if(altitudeValue < 6000) {
      landingPad.classList.remove('expanded');
    };
  
  
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
     mute.addEventListener('click', toggleMute);
    document.addEventListener('load', roomTone);

// END OF PROGRESS BAR=================

// SCROLL TO THE BOTTOM
window.onbeforeunload = function () {
    window.scrollTo(0, document.body.scrollHeight);
};

window.onload = roomTone();

window.onload = function () {
    window.scrollTo(0, document.body.scrollHeight);
}
// END OF SCROLL TO THE BOTTOM
