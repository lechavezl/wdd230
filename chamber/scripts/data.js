// Display the data from the JSON file
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
        logo.setAttribute("src", "data/images/placeholder-directory.png")
        logo.setAttribute("data-src", business.logo);
        logo.setAttribute("alt", `Logo of ${business.name}`);
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

        let imagesToLoad = document.querySelectorAll("img[data-src]");

        // Change the placeholder img for the data-src (original img)
        const loadImages = (image) => {
            image.setAttribute("src", image.getAttribute("data-src"));
            image.onload = () => {
                image.removeAttribute("data-src");
            };
        };

        const imgOptions = {
            threshold: 0,
            rootMargin: "0px 0px 50px 0px"
        };

        // Check if the content is in the viewport and execute the actions
        if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver((items, observer) => {
                items.forEach((item) => {
                    if (item.isIntersecting) {
                        loadImages(item.target);
                        observer.unobserve(item.target);
                    }
                });
            });
            imagesToLoad.forEach((img) => {
                observer.observe(img);
            });
        } else {
            imagesToLoad.forEach((img) => {
                loadImages(img);
            });
        }

    });
}

// Order the data in a grid or list view

const gridBtn = document.querySelector("#gridView");
const listBtn = document.querySelector("#listView");
const display = document.querySelector("div.businesses-cards");

gridBtn.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listBtn.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}