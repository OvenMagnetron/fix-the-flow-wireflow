const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box");

const introContainer = document.getElementById("introContainer");
const resultsContainer = document.getElementById("resultsContainer");
const nieuwsbriefContainer = document.getElementById("nieuwsbriefContainer");
const toggleButton = document.getElementById("toggleButton");
const searchInput = document.querySelector(".input-field");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})

searchInput.addEventListener("focus", () => {
    introContainer.classList.add("hidden");
    resultsContainer.classList.remove("hidden");
    toggleButton.classList.remove("hidden");
    nieuwsbriefContainer.classList.add("hidden");
});

toggleButton.addEventListener("click", () => {
    introContainer.classList.remove("hidden");
    resultsContainer.classList.add("hidden");
    toggleButton.classList.add("hidden");
    nieuwsbriefContainer.classList.remove("hidden");
})

searchInput.addEventListener("input", () => {
    if (searchInput.value.trim() !== "") {
        searchInput.classList.add("focused");
    } else {
        searchInput.classList.remove("focused");
    }
});
