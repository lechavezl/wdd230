const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function getFruitData() {
    const response = await fetch(url);
    const data = await response.json();
    const fruitNames = []
    for (let i = 0; i -39; i++) {
        fruitNames.push(data[i].name);
    };

    const options = fruitNames.map(fruitsName => `<option>${fruitsName}</option>`).join("");
    document.querySelector("#flavor-1").innerHTML = options;
    document.querySelector("#flavor-2").innerHTML = options;
    document.querySelector("#flavor-3").innerHTML = options;
}

getFruitData();

const submitButton = document.querySelector(".submitBtn");

function buttonOutput() {
    const output = document.querySelector("#submitted-output");
    const firstName = document.querySelector('input[name="fname"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const fruit1 = document.querySelector('#flavor-1').value;
    const fruit2 = document.querySelector('#flavor-2').value;
    const fruit3 = document.querySelector('#flavor-3').value;
    const indications = document.querySelector("textarea").value;
    const date = new Date().toLocaleDateString();

    const message = document.createElement("h2");
    const fName = document.createElement("p");
    const mail = document.createElement("p");
    const phoneNumber = document.createElement("p");
    const flavor1 = document.createElement("p");
    const flavor2 = document.createElement("p");
    const flavor3 = document.createElement("p");
    const textarea = document.createElement("p");
    const dateOrdered = document.createElement("p");

    message.textContent = `Your order has been submitted!`
    fName.textContent = `Name: ${firstName}`;
    mail.textContent = `Email: ${email}`;
    phoneNumber.textContent = `Phone Number: ${phone}`;
    flavor1.textContent = `Flavor 1: ${fruit1}`;
    flavor2.textContent = `Flavor 2: ${fruit2}`;
    flavor3.textContent = `Flavor 3: ${fruit3}`;
    dateOrdered.textContent = `Date: ${date}`;
    textarea.textContent = `Special Instructios: ${indications}`

    output.appendChild(message);
    output.appendChild(fName);
    output.appendChild(mail);
    output.appendChild(phoneNumber);
    output.appendChild(flavor1);
    output.appendChild(flavor2);
    output.appendChild(flavor3);
    output.appendChild(textarea);
    output.appendChild(dateOrdered);
    output.style.display = "block";
};

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    buttonOutput();
  });