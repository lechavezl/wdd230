// Take all the elements that will need to be modified
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Create a variable to hold the URL
const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks,units=imperial&appid=e2e3fe7cb77abe3984e683b38063793b";

// Create an async function and fetch() to retrieve the data
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

  }