
let date = new Date();
let day = date.getDate();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[date.getMonth()];
let year = date.getFullYear();

const posts = document.querySelectorAll(".post");
const postsInfo = [{
    id: null,
    title: "",
    datePublished: "2024-07-18",
    nextPrevPosts: []
}, {
    id: null,
    title: "",
    datePublished: "2024-07-18",
    nextPrevPosts: []
},{
    id: null,
    title: "",
    datePublished: "2024-07-18",
    nextPrevPosts: []
},{
    id: null,
    title: "",
    datePublished: "2024-07-18",
    nextPrevPosts: []
}];
const staggerAmount = 0.1;

postsInfo.forEach((post, index) => {
    let id = index + 1;
    post.id = id;
    post.title = `This is my first blog post! Test ${id}.`
});

postsInfo.forEach(post => {
    let prevId = post.id - 1;
    let nextId = post.id + 1;

    if(post.id === 1){
        post.nextPrevPosts.push({id: nextId});
    } else if(post.id === postsInfo.length) {
        post.nextPrevPosts.push({id: prevId});
    } else{
        post.nextPrevPosts.push({id: prevId}, {id: nextId});
    }
});

posts.forEach((post, index) => {
    const postTitle = post.querySelector(".post-title");
    postTitle.textContent = postsInfo[index].title; 
})

function postMouseEnter(post){
    gsap.to(post.querySelectorAll(".post-inner-container > *"), {
        x: 10,
        stagger: staggerAmount,
        ease: "elastic.out(1,0.8)",
        duration: 1
    });
}
function postMouseLeave(post){
    gsap.to(post.querySelectorAll(".post-inner-container > *"), {
        x: 0,
        stagger: staggerAmount,
        ease: "elastic.out(1,1)",
        duration: 2
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

