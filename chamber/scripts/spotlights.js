const spotlightsData = "data/data.json";

async function spotlights() {
    const response = await fetch(spotlightsData);
    const data = await response.json();
    displayBusiness(data.businesses)
}

spotlights();

const displayBusiness = (businesses) => {

    let spotlightsBoxes = document.querySelectorAll(".spotlight");

    if (spotlightsBoxes.length > 0) {
        // Use the filter method to take only the membership Gold Businesses
        let goSiMembers = businesses.filter(business => business.membership === "Gold" || business.membership === "Silver")

        let uniqueMembers = new Set(goSiMembers);
        let listMembers = Array.from(uniqueMembers);

        const randomMembers = []

        while (randomMembers.length < 3) {
            let membersIndex = Math.floor(Math.random() * listMembers.length);
            let random = listMembers[membersIndex];
            if (!randomMembers.includes(random)) {
                randomMembers.push(random);
            };
        };

        // Use the forEach method to display in the home page the Gold members
        randomMembers.forEach((member, index) => {

            const spot = spotlightsBoxes[index];
            if (spot) {
                const busName = document.createElement("h3");
                const busLogo = document.createElement("img");
                const picture = document.createElement("picture")
                const busAddress = document.createElement("p");
                const busPhone = document.createElement("p");
                const busWebsite = document.createElement("a");
                const hr = document.createElement("hr");

                busName.textContent = member.name;
                busLogo.setAttribute("src", member.logo);
                busLogo.setAttribute("alt", `Logo of ${member.name}`);
                busAddress.textContent = member.address;
                busPhone.textContent = member.phone;
                busWebsite.textContent = `Website/Social Media`;
                busWebsite.href = member.website;
                busWebsite.target = "_blank"

                spot.appendChild(busName);
                picture.appendChild(busLogo);
                spot.appendChild(picture);
                spot.appendChild(busAddress);
                spot.appendChild(busPhone);
                spot.appendChild(busWebsite);
                spot.appendChild(hr);
            }
        });
    }
};
