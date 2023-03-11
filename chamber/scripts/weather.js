const currentTemperature = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDesc = document.querySelector("#currentCondition");
const wSpeed = document.querySelector("#windSpeed");

const url = "https://api.openweathermap.org/data/2.5/weather?q=Anaco&units=metric&appid=e2e3fe7cb77abe3984e683b38063793b";

async function fetchData() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        showResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

fetchData();

function showResults(weatherData) {
    //Get the temp and show it.
    const anacoTemp = weatherData.main.temp.toFixed(0);
    currentTemperature.textContent = anacoTemp;

    //Transforming the temp into a float number
    const floatTemperature = parseFloat(anacoTemp);
    
    // Get the icon weather 
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    
    // Get the wind speed.
    const windSp = weatherData.wind.speed;

    // Make uppercase the first letter of each word in the description
    // 1. Use the split method to create an array of each word (Separate each word)
    // 2. Use the map method to iterate over each word in the array.
    // 3. Use the chartAt method to take the firts letter of each word.
    // 4. Uppercase the first letter of each word
    // 5. Use the slice method to get the rest of the word.
    // 6. Use the join method to join the array into a single string.
    let descUppercase = desc.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', descUppercase);
    weatherDesc.textContent = descUppercase;
    wSpeed.textContent = windSp;

    // Calculate the wind chill
    // 1. Convert Celsius to Fahrenheit and kilometers to miles
    const fahTemperature = (floatTemperature * 9/5) + 32;
    
    // 2. Convert kilometers to miles
    const mileSpeed = windSp * 0.62137;

    // A conditional to make sure the values meet the requirements
    if (fahTemperature <= 50 && mileSpeed > 3.0) {
      
      // if True calculate the wind chill
      let windChill = 35.74 + (0.6215 * fahTemperature) - (35.75 * (windSp ** 0.16)) + (0.4275 * (fahTemperature * (windSp ** 0.16)));

      let showWindChill = windChill.toFixed(2);
      document.querySelector("#windChillValue").innerHTML = showWindChill;
    }

    else {
      showWindChill = "N/A";
      document.querySelector("#windChillValue").innerHTML = showWindChill;
    }
}