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

function likeButton(clickedButton) {
    clickedButton.querySelector('i').classList.toggle("bx-heart");
    clickedButton.querySelector('i').classList.toggle("bxs-heart");
    clickedButton.querySelector('i').classList.toggle("changeColor");
    clickedButton.querySelector('i').classList.toggle("jump");
}
