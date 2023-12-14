const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})

const likebtn = document.querySelector('#likeButton')

function likeButton() {
    likebtn.classList.toggle("bx-heart");
    likebtn.classList.toggle("bxs-heart");
    likebtn.classList.toggle("changeColor");
    likebtn.classList.toggle("jump");
}