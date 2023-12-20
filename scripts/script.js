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

// Zoek de popupcontainer class
const popupContainer = document.getElementById("popupContainer")

function likeButton(clickedButton) {
    // Check of de popup container de class "poof" heeft.
    if (popupContainer.classList.contains('poof')) {
        // Zo ja, even wachten
        console.log("Even wachten...")
    } else {
        // Check of het hartje gekleurd is
        if (clickedButton.querySelector('i').classList.contains("changeColor")) {
            // Ja = Togge deze classes
            clickedButton.querySelector('i').classList.toggle("bx-heart");
            clickedButton.querySelector('i').classList.toggle("bxs-heart");
            clickedButton.querySelector('i').classList.toggle("changeColor");
            clickedButton.querySelector('i').classList.toggle("jump");
        } else {
            // Nee = Toggle deze classes en voeg de animatie toe
            clickedButton.querySelector('i').classList.toggle("bx-heart");
            clickedButton.querySelector('i').classList.toggle("bxs-heart");
            clickedButton.querySelector('i').classList.toggle("changeColor");
            clickedButton.querySelector('i').classList.toggle("jump");

            popupContainer.classList.add('poof');
            // Na 1800ms dus 1.8s verwijder de class poof (De animatie)
            setTimeout(() => {
                popupContainer.classList.remove('poof');
            }, 1800);
        }
    }
}
