import { postsInfo } from "./posts-info.js";

const posts = document.querySelectorAll(".post");
const staggerAmount = 0.1;

postsInfo.forEach((post, index) => {
    let id = index + 1;
    post.id = id;

    let prevId = post.id - 1;
    let nextId = post.id + 1;

    if(post.id === 1){
        post.nextPrevPosts.push({id: nextId});
    } else if(post.id === postsInfo.length) {
        post.nextPrevPosts.push({id: prevId});
    } else{
        post.nextPrevPosts.push({id: prevId}, {id: nextId});
    }

    post.url = `blogPosts/post${index + 1}.html`;
});

posts.forEach((post, index) => {
    // post.parentElement.setAttribute("href", postsInfo[index].url);
    const postTitle = post.querySelector(".post-title");
    const postDate = post.querySelector(".post-date");
    postTitle.textContent = postsInfo[index].title;
    postDate.textContent = postsInfo[index].datePublished;
})

function postMouseEnter(post){
    gsap.to(post.querySelectorAll(".post-inner-container > *"), {
        x: 10,
        stagger: staggerAmount,
        ease: "elastic.out(1,0.8)",
        duration: 1
    });
    gsap.to(post.querySelector(".featured-post"), {
        y: -5,
        ease: "elastic.out(1,0.8)"
    });
}
function postMouseLeave(post){
    gsap.to(post.querySelectorAll(".post-inner-container > *"), {
        x: 0,
        stagger: staggerAmount,
        ease: "elastic.out(1,1)",
        duration: 2
    });
    gsap.to(post.querySelector(".featured-post"), {
        y: 0,
        ease: "elastic.out(1,0.8)"
    });
}

posts.forEach(post => {
    post.addEventListener("mouseenter", () => {
        postMouseEnter(post);
    });

    post.addEventListener("mouseleave", () => {
        postMouseLeave(post);
    })
});

