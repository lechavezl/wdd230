// Add funcionallity to the Toggle Meny or Hamburger Button

function toggleMenu () {
    let navList = document.getElementById("navList");
    let hamburgerBtn = document.getElementById("hamburgerBtn");
    
    navList.classList.toggle("open");
    hamburgerBtn.classList.toggle("open");
}

const hamBtn = document.getElementById("hamburgerBtn");
hamBtn.onclick = toggleMenu;