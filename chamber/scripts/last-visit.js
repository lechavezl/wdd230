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