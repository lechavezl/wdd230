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

// Show the current year
const year = now.getFullYear();
document.getElementById("currentYear").innerHTML = year;

// Show the last time when the document was modified
let lastModif = document.lastModified;
document.querySelector("#lastUpdated").innerHTML = `Last Modification: ${lastModif}`;

// Display a banner when is monday or tuesday
let banner = "";
let currentDay = now.getDay();
const getBanner = document.querySelector("#banner");

switch(currentDay) {
    case 0:
        banner = "";
        break;
    case 1:
        banner = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
        getBanner.style.color = "#000000";
        getBanner.style.backgroundColor = '#1FC1C3';
        getBanner.style.textAlign = "center";
        getBanner.style.border = "1px solid #1FC1C3"
        getBanner.style.borderBottomLeftRadius = "10px"
        getBanner.style.borderBottomRightRadius = "10px"
        getBanner.style.padding = "5px"
        break;
    case 2:
        banner = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
        getBanner.style.color = "#000000";
        getBanner.style.backgroundColor = '#1FC1C3';
        getBanner.style.textAlign = "center";
        getBanner.style.border = "1px solid #1FC1C3"
        getBanner.style.borderBottomLeftRadius = "10px"
        getBanner.style.borderBottomRightRadius = "10px"
        getBanner.style.padding = "5px"
        break;
    case 3:
        banner = "";
        break;
    case 4:
        banner = "";
        break;
    case 5:
        banner = "";
        break;
    case 6:
        banner = "";
        break;
}

const showBanner = getBanner.innerHTML = banner;