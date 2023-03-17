const lastDay = document.querySelector("#lastDay")


function lastVisit() {
    let today = new Date();
    let lastVisitDate = localStorage.getItem('lastVisitDate');
    
    if (lastVisitDate) {
        let daysSinceLastVisit = Math.floor((today - new Date(lastVisitDate)) / (1000 * 60 * 60 * 24));
        lastDay.textContent = `Hey, it's been ${daysSinceLastVisit} day since your last visit. Welcome!`;

    } else {
        lastDay.textContent = "This is your first visit. Welcome!";
    }
    
    localStorage.setItem('lastVisitDate', today);
}

lastVisit();