const url = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=metric&appid=e2e3fe7cb77abe3984e683b38063793b";

async function fetchForecast() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            showForecast(data);
            console.log(data.list)
            console.log(data.list[1])
            console.log(data.list[3])
        } else {
            throw Error(await response.text());
        }
      } catch (error) {
          console.log(error);
      }
}

fetchForecast();

function showForecast(weatherData) {

    // let currWeather = document.querySelector(".current-weather");
    // let weather1 = document.querySelector(".weather-1");
    // let weather2 = document.querySelector(".weather-2");
    // let weather3 = document.querySelector(".weather-3");
    
    // weatherData.forEach((data) => {
    //     let temp = document.createElement("p");
    //     let humidity = document.createElement("p");
    //     let icon = document.createElement("img");
    //     let description = document.createElement("p");

    //     temp.textContent = `${weatherData.list[0].main.temp.toFixed(0)}`

    //     currWeather.appendChild(temp)

    // });
    
    // const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

    document.querySelector(".curr-temp").textContent = `${weatherData.list[0].main.temp.toFixed(0)}`;
    document.querySelector(".curr-humidity").textContent = `${weatherData.list[0].main.humidity}%`;
    document.querySelector(".curr-icon").src =  `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    const currCondition = weatherData.list[0].weather[0].description;
    document.querySelector(".curr-desc").textContent = currCondition.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    document.querySelector(".temp-day1").textContent = weatherData.list[1].main.temp.toFixed(0);
    document.querySelector(".humidity-day1").textContent = `${weatherData.list[1].main.humidity}%`;
    document.querySelector(".icon-day1").src = `https://openweathermap.org/img/w/${weatherData.list[1].weather[0].icon}.png`;
    const ConditionD1 = weatherData.list[1].weather[0].description;
    document.querySelector(".desc-day1").textContent = ConditionD1.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    document.querySelector(".temp-day2").textContent = weatherData.list[2].main.temp.toFixed(0);
    document.querySelector(".humidity-day2").textContent = `${weatherData.list[2].main.humidity}%`;
    document.querySelector(".icon-day2").src = `https://openweathermap.org/img/w/${weatherData.list[2].weather[0].icon}.png`;
    const ConditionD2 = weatherData.list[2].weather[0].description;
    document.querySelector(".desc-day2").textContent = ConditionD2.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    document.querySelector(".temp-day3").textContent = weatherData.list[3].main.temp.toFixed(0);
    document.querySelector(".humidity-day3").textContent = `${weatherData.list[3].main.humidity}%`;
    document.querySelector(".icon-day3").src = `https://openweathermap.org/img/w/${weatherData.list[3].weather[0].icon}.png`;
    const ConditionD3 = weatherData.list[3].weather[0].description;
    document.querySelector(".desc-day3").textContent = ConditionD3.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');


//     const apiKey = 'your_api_key';
// const url = `https://api.openweathermap.org/data/2.5/forecast?q=your_city&appid=${apiKey}`;

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     const forecast = data.list.slice(0, 4); // extract the weather data for the next 4 days
//     const temperatures = forecast.map(item => item.main.temp); // extract the temperatures

//     const temperatureElements = document.querySelectorAll('.temperature');
//     temperatureElements.forEach((element, index) => {
//       element.textContent = `${Math.round(temperatures[index] - 273.15)} °C`; // display the temperatures in Celsius
//     });
//   })
//   .catch(error => console.error(error));


}