const follower = document.querySelector('.follower');
const progressBar = document.querySelector('.progress-inner');
const altitude = document.querySelector('.altitude-value');

// CURSOR=================
document.addEventListener('mousemove', function(e) {
    let left = e.clientX;
    let top = e.clientY;
    follower.style.left = left + 'px';
    follower.style.top = top + 'px';

    // Use the same cursor position for the clip-path
    // hiddenElement.style.clipPath = `circle(25% at ${left}px ${top}px)`;
  });
  

// PROGRESS BAR=================
document.addEventListener("scroll", function () {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const progress = 100 - (scrollTop / scrollableHeight) * 100;
  
    progressBar.style.display = "block";
    progressBar.style.width = progress + "%";
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
