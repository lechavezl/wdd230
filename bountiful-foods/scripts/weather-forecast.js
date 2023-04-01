const url = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=metric&appid=e2e3fe7cb77abe3984e683b38063793b";

async function fetchForecast() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            showForecast(data);
            console.log(data.list[0].weather[0].icon)
            console.log(data.list[1])
            console.log(data.list[2])
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
    document.querySelector(".curr-icon").setAttribute = ("src", `https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}.png`);
    const currCondition = weatherData.list[0].weather[0].description;
    const currUpper = currCondition.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    const TemperatureD1 = weatherData.list[1].main.temp.toFixed(0);
    const HumidityD1 = weatherData.list[1].main.humidity;
    const ConditionD1 = weatherData.list[1].weather[0].description;
    const UpperD1 = ConditionD1.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const IconD1 = weatherData.list[1].weather[0].icon;

    const TemperatureD2 = weatherData.list[2].main.temp.toFixed(0);
    const HumidityD2 = weatherData.list[2].main.humidity;
    const ConditionD2 = weatherData.list[2].weather[0].description;
    const UpperD2 = ConditionD2.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const IconD2 = weatherData.list[2].weather[0].icon;

    const TemperatureD3 = weatherData.list[3].main.temp.toFixed(0);
    const HumidityD3 = weatherData.list[3].main.humidity;
    const ConditionD3 = weatherData.list[3].weather[0].description;
    const UpperD3 = ConditionD3.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const IconD3 = weatherData.list[3].weather[0].icon;


}