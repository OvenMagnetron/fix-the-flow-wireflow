const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box");

const introContainer = document.getElementById("introContainer");
const searchForm = document.getElementById("searchForm");
const resultsContainer = document.getElementById("resultsContainer");
const nieuwsbriefContainer = document.getElementById("nieuwsbriefContainer");
const toggleButton = document.getElementById("toggleButton");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})

searchForm.addEventListener("focus", () => {
    introContainer.classList.add("hidden");
    resultsContainer.classList.remove("hidden");
    nieuwsbriefContainer.classList.add("hidden");
});

toggleButton.addEventListener("click", () => {
    introContainer.classList.remove("hidden");
    resultsContainer.classList.add("hidden");
    nieuwsbriefContainer.classList.remove("hidden");
})

