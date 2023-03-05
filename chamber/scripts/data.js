const businessData = "data/data.json";

async function getBusinessData() {
    const response = await fetch(businessData);
    const data = await response.json();
    displayBusiness(data.businesses);
}

getBusinessData();

const displayBusiness = (businesses) => {
    const businessesCards = document.querySelector(".businesses-cards");

    businesses.forEach((business) => {
        // Create the elements for each business
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let logo = document.createElement("img");
        let website = document.createElement("a");
        let phone = document.createElement("p");
        let address = document.createElement("p");
        let membership = document.createElement("p");

        // Set the data on each element
        logo.setAttribute("src", business.logo);
        logo.setAttribute("alt", `Logo of ${business.name}`);
        logo.setAttribute("loading", "lazy");
        name.textContent = `${business.name}`;
        address.textContent = business.address;
        phone.textContent = business.phone;
        website.href = business.website;
        website.textContent = `Website / Social Media`
        membership.textContent = `${business.membership} membership`;

        // Append the data to show in the browser
        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);

        // Apped all in the section (card) element
        businessesCards.appendChild(card);
    });
}