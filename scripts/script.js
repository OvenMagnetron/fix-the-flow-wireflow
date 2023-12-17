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

const popupContainer = document.getElementById("popupContainer")

function likeButton(clickedButton) {
    if (popupContainer.classList.contains('poof')) {
        console.log("Even wachten...")
    } else {
        if (clickedButton.querySelector('i').classList.contains("changeColor")) {
            clickedButton.querySelector('i').classList.toggle("bx-heart");
            clickedButton.querySelector('i').classList.toggle("bxs-heart");
            clickedButton.querySelector('i').classList.toggle("changeColor");
            clickedButton.querySelector('i').classList.toggle("jump");
        } else {
            clickedButton.querySelector('i').classList.toggle("bx-heart");
            clickedButton.querySelector('i').classList.toggle("bxs-heart");
            clickedButton.querySelector('i').classList.toggle("changeColor");
            clickedButton.querySelector('i').classList.toggle("jump");

            popupContainer.classList.add('poof');

            setTimeout(() => {
                popupContainer.classList.remove('poof');
            }, 1800);
        }
    }
}
