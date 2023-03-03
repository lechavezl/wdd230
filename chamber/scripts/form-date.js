// Created a new Date variable
const currentDate = new Date();
// Convert the date to string
const dateString = currentDate.toLocaleString();
console.log(dateString);
// Hold the value in the imput element
document.getElementById("hiddenDate").value = dateString;