// SMOOTH SCROLLING ==============
// const lenis = new Lenis()

// function raf(time) {
// lenis.raf(time)
// requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)

let mm = gsap.matchMedia();

// INTRO SECTION =================
const introTl = gsap.timeline({})

introTl
    .to(['.capstone-intro h1', '.intro-paragraph'], {
        duration: 1.5,
        opacity: 1,
        y: 0,
        stagger: 0.3,
        ease: 'elastic.out(0.4, 0.25)',
    })
    .to('.intro-paragraph b', {
        color: '#FFED8C',
        stagger: 0.2
    }, '+=.2')
    .to(['.best-project'], {
        duration: 5,
        opacity: 1,
        y: 0,
        ease: 'elastic.out(0.4, 0.25)',
    }, '<')


// PROBLEM SECTION ===============
const problemTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.capstone-problem',
        start: '30% center',
        end: '80% center',
        toggleActions: 'play none none none',
        markers: false
    }
})

problemTl.to(['.capstone-problem h1', '.problem-paragraph'], {
    duration: 2,
    opacity: 1,
    y: 0,
    stagger: 0.3,
    ease: 'elastic.out(0.4, 0.25)',
    })
    .to('.problem-paragraph b', {
        color: '#FFED8C',
        stagger: 0.2
    }, '-=1')


// QUESTION SECTION ==============
const questionTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.main-question',
        start: '30% center',
        end: '80% center',
        toggleActions: 'play none none none',
        markers: false
    }
})

questionTl
    .from('.main-question p', {
        opacity: 0,
    })
    .to('.main-question p b', {
        color: '#FFED8C',
        stagger: 0.2
    })

// BLACK HOLE SECTION ============
const blackHoleTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.begin-journey',
        start: '-40% center',
        end: '40% center',
        scrub: 2,
        toggleActions: 'play none none none',
        markers: false,
    }
})

blackHoleTl
    .to('.begin-journey', {
        y: -400,
    })
    .to('.begin-journey .black-hole', {
        rotate: -15
    }, '<')
    .to('.begin-journey', {
        y: -300
    })
    .to('.begin-journey .mask', {
        yPercent: -400,
    }, '<')
    .to('.begin-journey .mask h2', {
        yPercent: -300,
    }, '-=0.2')
    .to('.begin-journey .black-hole', {
        scale: 3.5,
        rotate: 0,
        position: 'sticky',
        inset: '0 100% 0 0',
    })

// SOLUTION SECTION ==============
const solutionTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.capstone-solution',
        start: 'top-=20% center',
        end: '80% center',
        toggleActions: 'play none none none',
        markers: false,
    }
})

solutionTl
    .to(['.capstone-solution h1', '.solution-paragraph'], {
        duration: 2,
        opacity: 1,
        y: 0,
        stagger: 0.3,
        ease: 'elastic.out(0.4, 0.25)',
    })
    .to('.solution-paragraph b', {
        color: '#FFED8C',
        stagger: 0.2
    })

solutionTl
    .to('.study-icon', {
        opacity: 1,
        left: -100,
        duration: 2,
    }, '<')
    .to('.account-icon', {
        duration: 10,
        opacity: 1,
        right: -180,
        duration: 2,
    }, '<')
    .to('.daily-icon', {
        duration: 10,
        opacity: 1,
        top: 800,
        left: 100,
        duration: 2,
    }, '<')
    .to('.progress-icon', {
        duration: 10,
        opacity: 1,
        top: 800,
        right: -50,
        duration: 2,
    }, '<')
    .to('.sheet-icon', {
        duration: 10,
        opacity: 1,
        top: 800,
        duration: 2,
    }, '<')

solutionTl
    .to(['.study-icon', '.account-icon', '.daily-icon', '.progress-icon', '.sheet-icon'], 2,{
        y:'-=10',
        rotate: -5,
        repeat: -1, 
        yoyo: true,
        stagger: 0.25
    }, '<');
    
// FEATURE SECTION ===============
// FEATURE 1 =====================
const featureOneTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.capstone-features .feature1',
        start: 'top center',
        end: '0% center',
        toggleActions: 'play none none none',
        markers: false
    }
})

featureOneTl
    .to(['.feature1 .feature-number', '.feature1 .feature-title', '.feature1 .feature-screens-container img', '.feature1 .mask p'], {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'elastic.out(0.4, 0.25)',
        stagger: 0.1
    })
    .to('.feature1 .mask p b', {
        color: '#FFED8C',
        stagger: 0.1
    }, '-=.2')

// FEATURE 2 =====================
const featureTwoTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.capstone-features .feature2',
        start: 'top center',
        end: '0% center',
        toggleActions: 'play none none none',
        markers: false
    }
})

featureTwoTl
    .to(['.feature2 .feature-number', '.feature2 .feature-title', '.feature2 .feature-screens-container img', '.feature2 .mask p'], {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'elastic.out(0.4, 0.25)',
        stagger: 0.1
    })
    .to('.feature2 .mask p b', {
        color: '#FFED8C',
        stagger: 0.1
    }, '-=.2')

// FEATURE 3 =====================
const featureThreeTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.capstone-features .feature3',
        start: 'top center',
        end: '0% center',
        toggleActions: 'play none none none',
        markers: false
    }
})

featureThreeTl
    .to(['.feature3 .feature-number', '.feature3 .feature-title', '.feature3 .feature-screens-container img', '.feature3 .mask p'], {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'elastic.out(0.4, 0.25)',
        stagger: 0.1
    })
    .to('.feature3 .mask p b', {
        color: '#FFED8C',
        stagger: 0.1
    }, '-=.2')

// FEATURE 4 =====================
const featureFourTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.capstone-features .feature4',
        start: 'top center',
        end: '0% center',
        toggleActions: 'play none none none',
        markers: false
    }
})

featureFourTl
    .to(['.feature4 .feature-number', '.feature4 .feature-title', '.feature4 .feature-screens-container img', '.feature4 .mask p'], {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'elastic.out(0.4, 0.25)',
        stagger: 0.1
    })
    .to('.feature4 .mask p b', {
        color: '#FFED8C',
        stagger: 0.1
    }, '-=.2')

// COMPULSION LOOP ===============
const consoleText = document.getElementById('consoleText');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');

let consoleIndex = 0;
let prevButtonDisabled = true;
let nextButtonDisabled = false;


function next() {
    if(!nextButtonDisabled) {
        consoleIndex = (consoleIndex + 1) % 3; // Use modulo to cycle through indices 0, 1, 2
        updateConsole();
    }
}

function previous() {
    if(!prevButtonDisabled) {
        consoleIndex = (consoleIndex - 1 + 3) % 3; // Use modulo to cycle through indices 0, 1, 2
        updateConsole();
    }
}

function updateConsole() {
    const content = [
        {
            text: `<p>These four features seemed nice and cool but <b>I thought we were missing something really important:</b></p>`
        },
        {
            text: `<h2><a href="https://medium.com/@superwayniac/compelling-user-engagement-with-compulsion-loops-2921629669ba" target="_blank">A compulsion loop</a></h2>`
        },
        {
            text: `<p>So I proposed <b>one last feature</b>...</p>`
        }
    ];
    
    consoleText.innerHTML = content[consoleIndex].text;
    if(consoleIndex > 0) {
        prevButtonDisabled = false;
        prevButton.style.opacity = 1;
    } else {
        prevButtonDisabled = true;
        prevButton.style.opacity = 0.5;
    
    }
    if(consoleIndex === content.length - 1) {
        nextButton.style.opacity = 0.5;
        nextButtonDisabled = true;
    } else {
        nextButton.style.opacity = 1;
        nextButtonDisabled = false;
    }
}

// CONSOLE'S EVENT LISTENERS
nextButton.addEventListener('click', function(){
    next();
});

prevButton.addEventListener('click', function(){
    previous();
});

// FEATURE 5 =====================
const featureFiveTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.capstone-features .feature5',
        start: 'top center',
        end: '0% center',
        toggleActions: 'play none none none',
        markers: false
    }
})

featureFiveTl
    .to(['.feature5 .feature-number', '.feature5 .feature-title', '.feature5 .feature-screens-container img', '.feature5 .mask p'], {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'elastic.out(0.4, 0.25)',
        stagger: 0.1
    })
    .to('.feature5 .mask p b', {
        color: '#FFED8C',
        stagger: 0.1
    }, '-=.2')

// END OF FEATURE SECTION ========

// THOUGHT PROCESS SECTION =======
const thoughtProcessTl = createProjectTl('.thought-process', '20% center', '30% center', false)

thoughtProcessTl
    .to(['.thought-process .mask h2', '.thought-process .mask p'], {
        y: 0,
        ease: 'power4.out',
        stagger: 0.2,
    })
// END OF THOUGHT PROCESS SECTION =

// INTERVIEWS SECTION ============
const interviewsIntroTl = createProjectTl('.interviews-intro', '10% center', '50% center', false)

interviewsIntroTl
    .to('.interviews-intro .mask > *', {
        y: 0,
        stagger: 0.2,
    })
    .to('.interviews-intro .mask h2 b', {
        color: '#FFED8C',
        stagger: 0.1
    }, '-=.2')

const interviewsTransitionTl = createProjectTl('.interviews-transition', '10% center', '50% center', false)

interviewsTransitionTl
    .to('.interviews-transition .mask h2', {
        y: 0,
        ease: 'power4.out',
    })
    .to('.interviews-transition .mask h2 b', {
        color: '#FFED8C',
        stagger: 0.1
    }, '-=.2')

const questionOneTl = createProjectTl('.interview-questions', '0% center', '20% center', false)

questionOneTl
    .to(['.interview-questions .first-question .mask > *'], {
        y: 0,
        ease: 'power4.out',
        stagger: 0.1,
    })
    .to('.interview-questions .first-question .answer .first-answer .answer-bar', {
        height: 50,
    })
    .to('.interview-questions .first-question .answer .second-answer .answer-bar', {
        height: 35,
    })
    .to('.interview-questions .answer .third-answer .answer-bar', {
        height: 25,
    })

const questionTwoTl = createProjectTl('.interview-questions', '20% center', '40% center', false)

questionTwoTl
    .to(['.interview-questions .second-question .mask > *'], {
        y: 0,
        ease: 'power4.out',
        stagger: 0.1,
    })
    .to('.interview-questions .second-question .answer .first-answer .answer-bar', {
        height: 50,
    })
    .to('.interview-questions .second-question .answer .second-answer .answer-bar', {
        height: 35,
    })
// END OF INTERVIEWS SECTION =====

// ITERATIVE PROCESS SECTION =====
// const iterativeTl = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.iterative-process',
//         start: 'top center',
//         end: '80% center',
//         toggleActions: 'play reverse play reverse',
//         markers: false,
//         scrub: 1
//     }
// })

const iterativeTl = createProjectTl('.iterative-process', 'top center', '80% center')

iterativeTl
    .to('.iterative-process .mask', {
        width: '100%',
        height: '100vh'
    })
    .to('.iterative-process .mask', {
        borderRadius: 0
    })
    .to('.text-mask  h1', {
        y: 0,
        ease: 'elastic.out(0.4, 0.25)'
    })
    
// WIREFRAMES SECTION ============
const wireframesTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.wireframes',
        start: '-20% center',
        end: '50% center',
        toggleActions: 'play reverse play reverse',
        markers: false,
        scrub: 1
    }
})

wireframesTl
    .to('.iterative-process .text-mask', {
        opacity: 0
    })
    .to('.wireframes .mask h1', {
        y: 0,
        ease: 'power4.out',
        duration: 1
    })
    .to('.wireframes .line', {
        width: 350,
        ease: 'power4.out',
        duration: 2
    }, '<')
    .to('.wireframes .mask .images-container', {
        y: 0,
        ease: 'power4.out',
        duration: 1
    }, '<')

// ARTBOARDS SECTION =============
const artboardsTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.artboards',
        start: '-20% center',
        end: '80% center',
        toggleActions: 'play reverse play reverse',
        markers: false,
        scrub: 1
    }
})

artboardsTl
    .to('.wireframes > *', {
        opacity: 0
    })
    .to(['.artboards .mask h1', '.artboards .mask p'], {
        y: 0,
        ease: 'power4.out',
        stagger: 0.1,
        duration: 1
    })
    .to('.artboards .mask .images-container', {
        y: 0,
        ease: 'power4.out',
        duration: 1
    }, '<')

// MOCKUPS SECTION ===============
const mockupsTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.mockups',
        start: '-20% center',
        end: '50% center',
        toggleActions: 'play reverse play reverse',
        markers: false,
        scrub: 1
    }
}) 

mockupsTl
    .to('.artboards > *', {
        opacity: 0
    })
    .to('.mockups .mask h1', {
        y: 0,
        ease: 'power4.out',
        duration: 1
    })
    .to('.mockups .line', {
        width: 350,
        ease: 'power4.out',
        duration: 2
    }, '<')
    .to('.mockups .mask .images-container', {
        y: 0,
        ease: 'power4.out',
        duration: 1
    }, '<')

// UI STYLE SECTION ==============
const uiStyleIntroTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.ui-style-intro',
        start: 'top center',
        end: '50% center',
        toggleActions: 'play reverse play reverse',
        markers: false,
        scrub: 2
    }
})

uiStyleIntroTl
    .to('.ui-style-intro .mask h1', {
        x: 0,
        ease: 'power4.out',
    })
    .to('.ui-style-intro .line', {
        height: 200,
        ease: 'power4.out',
        duration: 2
    }, '<')
    .to('.mockups .mask .images-container', {
        opacity: 0
    }, '<')

const uiStyleTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.ui-style',
        start: '-10% center',
        end: '10% center',
        toggleActions: 'play reverse play reverse',
        markers: false,
        scrub: 1
    }
})

uiStyleTl
    .to(['.ui-style-intro > *'], {
        opacity: 0
    })
    .to('.ui-style .micro-interactions .images-container .mask video', {
        y: 0,
        ease: 'power4.out',
        stagger: 0.1,
        duration: 2
    })
    .to(['.ui-style .micro-interactions .mask h1', '.ui-style .micro-interactions .mask p'], {
        y: 0,
        ease: 'power4.out',
        stagger: 0.1,
        duration: 1
    })

const animationsTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.animations',
        start: '10% center',
        end: '30% center',
        toggleActions: 'play reverse play reverse',
        markers: false,
        scrub: 1
    }
})

animationsTl
    .to('.ui-style .micro-interactions > *', {
        opacity: 0
    })
    .to('.ui-style .animations .images-container .mask video', {
        y: 0,
        ease: 'power4.out',
        stagger: 0.3,
        duration: 2
    })
    .to('.ui-style .animations .mask p', {
        y: 0,
        ease: 'power4.out',
        stagger: 0.1,
        duration: 1
    })

const lumiIntroTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.lumi-intro',
        start: '-10% center',
        end: '20% center',
        toggleActions: 'play reverse play reverse',
        markers: false,
        scrub: 1
    }
})

lumiIntroTl
    .to('.ui-style .animations > *', {
        opacity: 0
    })
    .to('.ui-style .lumi-intro .mask p', {
        y: 0,
        ease: 'power4.out',
        stagger: 0.1,
        duration: 1
    })
    .to('.ui-style .lumi-intro .images-container .mask video', {
        y: 0,
        ease: 'power4.out',
        stagger: 0.3,
        duration: 2
    })

// LUMI SECTION ==================
const lumiTransitionTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.lumi-transition',
        start: '-10% center',
        end: '30% center',
        toggleActions: 'play reverse play reverse',
        markers: false,
        scrub: 1
    }
})

lumiTransitionTl
    .to(['.animations', '.lumi-intro .text-container', '.lumi-intro .images-container'], {
        opacity: 0,
    })
    .to('.lumi-transition .mask p', {
        y: 0,
        x: 0,
        ease: 'power4.out'
    }, '<')

const lumiSketchOneTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.sketch-one',
        start: '-10% center',
        end: '30% center',
        toggleActions: 'play reverse play reverse',
        markers: false,
        scrub: 1
    }
})

lumiSketchOneTl
    .to('.lumi-transition .mask p', {
        opacity: 0
    })
    .to(['.lumi-sketches .sketch-one .mask p', '.lumi-sketches .sketch-one .mask img'], {
        y: 0,
        ease: 'power4.out',
        stagger: 0.1
    })

const lumiSketchTwoTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.sketch-two',
        start: '-10% center',
        end: '30% center',
        toggleActions: 'play reverse play reverse',
        markers: false,
        scrub: 1
    }
})

lumiSketchTwoTl
    .to(['.lumi-sketches .sketch-two .mask p', '.lumi-sketches .sketch-two .mask img'], {
        y: 0,
        ease: 'power4.out',
        stagger: 0.1
    })

const lumiSketchThreeTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.sketch-three',
        start: '-10% center',
        end: '30% center',
        toggleActions: 'play reverse play reverse',
        markers: false,
        scrub: 1
    }
})

lumiSketchThreeTl
    .to(['.lumi-sketches .sketch-three .mask p', '.lumi-sketches .sketch-three .mask img'], {
        y: 0,
        ease: 'power4.out',
        stagger: 0.1
    })

const lumiVectorizedTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.lumi-vectorized',
        start: '-10% center',
        end: '30% center',
        toggleActions: 'play reverse play reverse',
        markers: false,
        scrub: 2
    }
})

lumiVectorizedTl
    .to('.lumi-vectorized .mask p', {
        y: 0,
        ease: 'power4.out'
    })
    .to('.lumi-vectorized .images-container .mask img', {
        y: 0,
        ease: 'power4.out',
        stagger: 0.1
    }, '<')

function createProjectTl(triggerSelector, start = 'top center', end = '50% center', markers = false){
    return gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: start,
            end: end,
            toggleActions: 'play reverse play reverse',
            markers: markers,
            scrub: 2
        }
    })
}

// LUMI ANIMATION SECTION ========
// END OF LUMI ANIMATION SECTION =

// LEARNIUM FINAL SECTION ============
const learniumOutro = createProjectTl('.learnium-outro', '10% center', '30% center')

learniumOutro
    .to('.lumi-animation > *', {
        opacity: 0
    })
    .to(['.learnium-outro .mask img', '.learnium-outro .mask .visit-website'], {
        y: 0,
        ease: 'power4.out',
        stagger: 0.2
    })

const learniumButton = document.querySelector('.visit-website');

learniumButton.addEventListener('mouseenter', () => {
    gsap.to('.visit-website p', {
        yPercent: -100,
     })
})
learniumButton.addEventListener('mouseleave', () => {
    gsap.to('.visit-website p', {
        yPercent: 0,
     })
})
// END OF LEARNIUM FINAL SECTION =