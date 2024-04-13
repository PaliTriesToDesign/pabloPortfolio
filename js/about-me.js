import { toggleMute, bleepSound } from "./functions.js";

const powerButton = document.getElementById('powerButton');
const rightDoor = document.getElementById('rightDoor');
const leftDoor = document.getElementById('leftDoor');
const consoleImage = document.getElementById('consoleImage');
const consoleText = document.getElementById('consoleText');
const bolts = document.querySelectorAll('.bolt');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');

let powerOn = false;
let doorsOpen = false;
let consoleIndex = 0;

function openDoors(){
    gsap.to(leftDoor, 2, {
        xPercent: -50
    })
    gsap.to(rightDoor, 2, {
        xPercent: 50
    })
    gsap.to(bolts, 1, {
        rotation: '180deg'
    })

    doorsOpen = true;
}

function closeDoors(){
    gsap.to(leftDoor, 2, {
        xPercent: 0
    })
    gsap.to(rightDoor, 2, {
        xPercent: 0
    })
    gsap.to(bolts, 1, {
        rotation: '0deg'
    })

    doorsOpen = false;
}

function turnOn(){
    powerOn = true;
    openDoors();
    bleepSound();
    gsap.to(powerButton, .1, {
        backgroundColor: '#FF4C4C',    
    })
    gsap.to(consoleText, 1, {
        backgroundColor: '#87FFC5',    
    })
    consoleImage.style.backgroundImage = 'url(../assets/aboutMe/pablo.webp)';
    consoleText.innerHTML = `<p>Hey there! I'm just a guy who loves <b>illustrating</b>, <b>designing</b> and <b>coding</b>. I enjoy taking <b>inspiring ideas</b> and bringing them to life in my projects.</p>`;
}

function turnOff(){
    powerOn = false;
    closeDoors();
    bleepSound();
    gsap.to(powerButton, .1, {
        backgroundColor: '#72ff89',    
    })
    gsap.to(consoleText, 1, {
        backgroundColor: '#ACACAC',    
    })
    consoleText.innerHTML = '';
    // consoleText.classList.remove('crt');
}

function next() {
    if (powerOn) {
        bleepSound();
        consoleIndex = (consoleIndex + 1) % 3; // Use modulo to cycle through indices 0, 1, 2
        updateConsole();
    }
}

function previous() {
    if (powerOn) {
        bleepSound();
        consoleIndex = (consoleIndex - 1 + 3) % 3; // Use modulo to cycle through indices 0, 1, 2
        updateConsole();
    }
}

function updateConsole() {
    const content = [
        {
            image: 'url(../assets/aboutMe/pablo.webp)',
            text: `<p>Hey there I'm just a guy who loves <b>illustrating</b>, <b>designing</b> and <b>coding</b>. I enjoy taking <b>inspiring ideas</b> and bringing them to life in my projects.</p>`
        },
        {
            image: 'url(../assets/aboutMe/frisbee.webp)',
            text: `<p>Playing <b>frisbee</b>, <b>climbing</b>, and <b>hiking</b> are simply my favorite activities. I absolutely love being outdoors.</p>`
        },
        {
            image: 'url(../assets/aboutMe/tool.webp)',
            text: `<p><b>Fun Fact:</b> My favorite band is <b>Tool</b>. I began playing the guitar because of them.</p>`
        }
    ];
    
    consoleImage.style.backgroundImage = content[consoleIndex].image;
    consoleText.innerHTML = content[consoleIndex].text;
}
// CONSOLE'S EVENT LISTENERS
powerButton.addEventListener('click', function(){
    if(!doorsOpen){
        turnOn();
    } else {
        turnOff();
    }
});

nextButton.addEventListener('click', function(){
    next();
});

prevButton.addEventListener('click', function(){
    previous();
});
