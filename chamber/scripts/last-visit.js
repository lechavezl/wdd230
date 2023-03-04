const lastDay = document.querySelector("#lastDay")

if (!localStorage.getItem("lastVisit")) {
    localStorage.setItem("lastVisit", new Date().getTime());
    lastDay.textContent = "This is your first visit. Welcome!";
} else {
    let currentDate = new Date();
    let lastVisited = new Date(parseInt(localStorage.getItem("lastVisit")));
    let calculateTimeDiff = currentDate - lastVisited;
    let calculateDays = Math.round(calculateTimeDiff / (1000 * 60 * 60 * 24));

    if (calculateDays == 1) {
        lastDay.textContent = `Hey, it's been ${calculateDays} day since your last visit. Welcome!`
    } else {
        lastDay.textContent = `Hey, it's been ${calculateDays} days since your last visit. Welcome!`
    }
}

// function lastVisit() {
//     var today = new Date();
//     var lastVisitDate = localStorage.getItem('lastVisitDate');
    
//     if (lastVisitDate) {
//         var daysSinceLastVisit = Math.floor((today - new Date(lastVisitDate)) / (1000 * 60 * 60 * 24));
//         alert(`Your last visit was daysSinceLastVisit days ago.`);
//     } else {
//         alert('Welcome to our website!');
//     }
    
//     localStorage.setItem('lastVisitDate', today);
// }