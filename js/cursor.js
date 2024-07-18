const body = document.querySelector("body");
const blogEl = document.getElementById("blogContainer");
const posts = document.querySelectorAll(".post");
const cursors = document.querySelectorAll(".cursor");

// posts.forEach((post, index) => {
//     const postRect = post.getBoundingClientRect();
    
//     // post.addEventListener creates a different effect.
//     body.addEventListener("mousemove", event => {
//         let x = event.clientX - postRect.left + "px";
//         let y = event.clientY - postRect.top + "px";
//         cursors[index].style.left = x;
//         cursors[index].style.top = y;
//     });
// });

// blogEl.addEventListener creates a different effect.
body.addEventListener("mousemove", event => {
    posts.forEach((post, index) => {
        const postRect = post.getBoundingClientRect();
        
        let x = event.clientX - postRect.left + "px";
        let y = event.clientY - postRect.top + "px";
        cursors[index].style.left = x;
        cursors[index].style.top = y;
    });
});