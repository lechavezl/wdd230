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


// Add laylozad to the images


// Select the elements in the DOM
let imagesToLoad = document.querySelectorAll("img[data-src]");

// Change the placeholder img for the data-src (original img)
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

// Check if the content is in the viewport and execute the actions
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}