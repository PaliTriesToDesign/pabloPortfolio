import { toggleMute, bleepSound } from "./functions.js";

// SOUND FX=======================
const mute = document.getElementById('soundIcon')
mute.addEventListener('click', toggleMute)
//END OF SOUND FX=================

//BUTTONS=========================
const aboutMeButton = document.getElementById('aboutMeButton');
const honestMeButton = document.getElementById('honestMeButton');
const jokeButton = document.getElementById('jokeButton');
const aboutMeContent = document.getElementById('aboutMeContent');

const jokesArr = ['How do you comfort a JavaScript bug? You console it.', 'I only have one joke and it is really bad, sorry.'];

function aboutMe(){
    aboutMeContent.innerHTML = `<p>Hey there! I'm just a guy who loves designing, coding, bouldering, and playing frisbee. I enjoy taking inspiring ideas and bringing them to life in my projects.</p>`
    aboutMeButton.parentElement.style.opacity = `1`;
    resetOpacity(honestMeButton, jokeButton);
    contentOpacity();
    bleepSound();

}

function honestMe(){
    aboutMeContent.innerHTML = `<p>Hey there! Sometimes, I feel like I have no f*** clue what I'm doing. When that happens, I just hit the climbing wall, head out for a hike or just grab my guitar.</p>`
    honestMeButton.parentElement.style.opacity = `1`;
    resetOpacity(aboutMeButton, jokeButton);
    contentOpacity();
    bleepSound();

}

function joke(){
    let randomNum = Math.floor(Math.random()*jokesArr.length);
    aboutMeContent.innerHTML = `<p>${jokesArr[randomNum]}</p>`
    jokeButton.parentElement.style.opacity = `1`;
    contentOpacity();
    resetOpacity(aboutMeButton, honestMeButton);
    bleepSound();

}

function contentOpacity(){
    aboutMeContent.children[0].style.opacity = `1`;
}

function resetOpacity(buttonOne, buttonTwo){
    buttonOne.parentElement.style.opacity = `0.5`;
    buttonTwo.parentElement.style.opacity = `0.5`;
}

aboutMeButton.addEventListener('click', aboutMe);
honestMeButton.addEventListener('click', honestMe);
jokeButton.addEventListener('click', joke);
//END OF BUTTONS=========================


