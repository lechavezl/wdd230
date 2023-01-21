// Get and show the current year
let currentDate = new Date();
let year = currentDate.getFullYear();
document.querySelector("#currentYear").innerHTML = year;

// Show the last time when the document was modified
let lastModif = document.lastModified;
document.querySelector("#lastUpdated").innerHTML = `Last Updated: ${lastModif}`;