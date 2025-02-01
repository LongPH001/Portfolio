// Function to toggle the dropdown menu
function toggleMenu() {
    var menu = document.getElementById("dropdown");
    menu.classList.toggle("show");
}

// Get the button and check local storage
const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

// Check if user has a saved preference
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
}

// Toggle Light/Dark Mode
modeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    // Save user preference in local storage
    if (body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});
