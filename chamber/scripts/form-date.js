// Created a new Date variable
const currentDate = new Date();
// Convert the date to string
const dateString = currentDate.toLocaleString();
console.log(dateString);
// Hold the value in the imput element
document.getElementById("hiddenDate").value = dateString;

// Get the botton element
const toggleBtn = document.querySelector("#toggle-btn");
// Get the table element
const floatingTable = document.querySelector("#floating-table");
// Get the close button element
const closeBtn = document.querySelector("#close-btn");

toggleBtn.addEventListener("click", () => {
  floatingTable.style.display = floatingTable.style.display === "none" ? "block" : "none";
  closeBtn.style.display = closeBtn.style.display === "none" ? "block" : "none";
});

closeBtn.addEventListener("click", () => {
  floatingTable.style.display = "none";
  closeBtn.style.display = "none"
});