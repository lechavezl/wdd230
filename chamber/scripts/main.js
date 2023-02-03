// Add functionality to the Toggle Menu (Hamburger Button)
function toggleMenu () {
    document.getElementById("navList").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const hamButton = document.getElementById("hamburgerBtn");
hamButton.onclick = toggleMenu;

// Get and show the current date
const dateNav = document.querySelector("#currentDate");
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

dateNav.innerHTML = `${fulldateUK}`
// let year = currentDate.getFullYear();
// document.querySelector("#currentYear").innerHTML = year;

// Show the last time when the document was modified
// let lastModif = document.lastModified;
// document.querySelector("#lastUpdated").innerHTML = `Last Updated: ${lastModif}`;