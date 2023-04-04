// Add funcionallity to the Toggle Meny or Hamburger Button

function toggleMenu () {
    let navList = document.getElementById("navList");
    let hamburgerBtn = document.getElementById("hamburgerBtn");
    
    navList.classList.toggle("open");
    hamburgerBtn.classList.toggle("open");
}

const hamBtn = document.getElementById("hamburgerBtn");
hamBtn.onclick = toggleMenu;

// Show the document last modified at the bottom of the page

let lastModif = document.lastModified;
document.querySelector("#lastModified").innerHTML = `Last Modification: ${lastModif}`;