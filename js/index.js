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

    } else if(userName.trim() !== "" && maxScrollHeight) {
        bleepSound();
        // setTimeout(rocketLaunchSound, 300);

        // Updates elements in the loader div
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
    //  mute.addEventListener('click', toggleMute);
    // document.addEventListener('load', roomTone);

// END OF PROGRESS BAR=================


// DISABLE SCROLL=================
// if(scrollPercentage > 90){
//   disableScroll();
// } else {
//   enableScroll();
// }

// ABOUT-ME-SECTION================
const aboutMeTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#about-me",
    start: "top top",
    end: "top top",
    toggleActions: "none none play none",
    markers: false
  },
  defaults: {
    ease: 'elastic.out(0.15, 0.3)',
  }
})

aboutMeTl
  .to(['#about-me .home-card-column', '#about-me .home-card-description', '#about-me .home-card-row'], 3, {
    x: 0,
    y: 0,
    rotation: 0,
    stagger: 0.1,
  })
// END OF ABOUT-ME-SECTION=========

// EARTH CURVATURE================
const earthSlideOutTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#projects",
    start: "bottom center",
    end: "+=20% center",

    toggleActions: "none none reset none",
    
    onEnterBack: () => {
      earthSlideOutTl.reverse().timeScale(1.0);
    },
    
    onLeave: () => {
      earthSlideOutTl.timeScale(30.0);
    },

    markers: true
    // toggleActions: 'reset reset reverse play',
    // toggleActions: 'none none play play',
    // toggleActions: 'none none reverse play',

  }
})

earthSlideOutTl
  .to('.earth-container img', {
    yPercent: -25,
    scale: 4,
    ease: 'power4.out',
    duration: 2,
  })
  .to('.earth-container img', {
    rotation: 360,
    duration: 120,
    repeat: -1,
  }, '<')
  .to('.earth-container img', {
    scale: 0.25,
    duration: 40
  }, '<')
// END OF EARTH CURVATURE=========

// PROJECTS========================


const projectsTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#projects",
    start: "bottom+=10% center",
    end: "bottom center",
    toggleActions: "none reverse play none",
    markers: false
  },
  defaults: {
    ease: 'elastic.out(0.4, 0.3)',
    duration: 1
  }
})

projectsTl
  .to('.projects-mask h1', {
    yPercent: -200
  })
  .to('.projects-mask .projects-line', {
    width: '100%'
  }, '<')

projectsTl.reverse();

const projectOneTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#project",
    start: "center center",
    end: "center center",
    toggleActions: "none none none none",
    markers: false
  }
})

projectOneTl
  .to('.main-mask .project-images .mask img', {
    y: 230,
    bottom: '-20%',
  })
  .to('.main-mask', {
    width: '30vw',
    height: '40vh',
    borderRadius: '1rem',
    duration: 0.1,
  }, '<')
  .to(['.main-mask .mask h3', '.main-mask .mask .project-tags', '.main-mask .mask .project-description'], {
    y: 0,
    stagger: 0.2,
    ease: 'elastic.out(0.4, 0.3)',
})

const mask = document.querySelector('.main-mask');

// mask.addEventListener('click', () => {
//   if(projectOneTl.reversed()) {
//     projectOneTl.play();
//   } else {
//     projectOneTl.reverse();
//   }
// })

mask.addEventListener('mouseenter', () => {
  projectOneTl.timeScale(1).play();
})

mask.addEventListener('mouseleave', () => {
  projectOneTl.timeScale(3).reverse();
})
// END OF PROJECTS=================

// CONTACT-ME-SECTION==============
const contactMeTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#contactMe",
    start: "center+=20% center",
    end: "center+=30% center",
    toggleActions: "none none play none",
    markers: false
  }, 
  defaults: {
    ease: 'elastic.out(0.15, 0.3)',
  }
})

contactMeTl
  .to(['#contactMe .home-card-column', '#contactMe .home-card', '#about-me .home-card-row'], 3, {
    x: 0,
    y: 0,
    rotation: 0,
    stagger: 0.1,
  })
  .to('#contactMe .mask .copyright', {
    y: 0
  })
  .to('#contactMe .copyright b', {
    color: '##FFED8C'
  })

  // RANDOM TYPE FUNCTION=========
  function randomType(element, characters, duration, text, color) {
    let originalText = element.innerText;
    let textArray = originalText.split('');
    let charactersArray = characters.split('');
    let startTime = new Date().getTime();
    let currentIndex = 0;
    let interval;
  
    interval = setInterval(function() {
        textArray[currentIndex] = charactersArray[Math.floor(Math.random() * charactersArray.length)];
        element.innerText = textArray.join('');
        currentIndex++;
        if (currentIndex === textArray.length) {
            currentIndex = 0;
        }
        if (new Date().getTime() - startTime >= duration) {
            clearInterval(interval);
            element.style.color = color;
            element.innerText = text;
        }
    }, 20);
  }

let paliTriesTo = document.querySelector('#paliTriesTo b');
let alternate = true;

setInterval(() => {
  if (alternate) {
    randomType(paliTriesTo, '!@#$%&', 750, 'code', '#72ff89');
  } else {
    randomType(paliTriesTo, '!@#$%&', 750, 'design', '#FFED8C');
  }
  alternate = !alternate;
}, 6000);
// END OF CONTACT-ME-SECTION======
