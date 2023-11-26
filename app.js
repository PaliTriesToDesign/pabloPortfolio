const bodyHeight = document.body.scrollHeight;
const follower = document.querySelector('.follower');
const project = document.getElementById('project');
const progressBar = document.querySelector('.progress-inner');
const altitude = document.querySelector('.altitude-value');
const starship = document.querySelector('.starship-system')
const mute = document.getElementById('soundIcon')

mute.addEventListener('click', function() {
  let roomTone = document.getElementById('roomTone');
  let soundIcon = document.getElementById("soundIcon");
  
  if (roomTone.paused) {
    roomTone.play();
    soundIcon.innerHTML = `<i class="fa-solid fa-volume-high mute-icon"></i>`
  } else {
    roomTone.pause();
    soundIcon.innerHTML = `<i class="fa-solid fa-volume-xmark mute-icon"></i>`

  }
})

//CURSOR=================
document.addEventListener('mousemove', function(e) {
    let left = e.offsetX;
    let top = e.offsetY;
    follower.style.left = left + 'px';
    follower.style.top = top + 'px';

    // Use the same cursor position for the clip-path
    // hiddenElement.style.clipPath = `circle(25% at ${left}px ${top}px)`;
  });

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
    const currentScrollPos = window.scrollY;
    const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const altitudeValue = maxScrollHeight - currentScrollPos;

    if(altitudeValue < 1000){
      altitude.textContent = `${Math.floor(altitudeValue) * 1}m`;
    } else if(altitudeValue >= 1000) {
      altitude.textContent = `${Math.floor(altitudeValue) * 1}km`;
    }
  }

  window.addEventListener("scroll", updateCounter);
  updateCounter(); // Call the function initially



  // use localstorage to store a flag for the first time
  // if user opened website first time
  // then scroll at the bottom
  // else do nothing
  window.onbeforeunload = function () {
    window.scrollTo(0, document.body.scrollHeight);
  }
