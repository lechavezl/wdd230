const url = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=metric&appid=e2e3fe7cb77abe3984e683b38063793b";

async function fetchForecast() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            showForecast(data);
        } else {
            throw Error(await response.text());
        }
      } catch (error) {
          console.log(error);
      }
}

fetchForecast();

function showForecast(weatherData) {

    document.querySelector(".curr-temp").textContent = `${weatherData.list[0].main.temp.toFixed(0)} F°`;
    document.querySelector(".curr-humidity").textContent = `${weatherData.list[0].main.humidity}%`;
    document.querySelector(".curr-icon").src =  `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    const currCondition = weatherData.list[0].weather[0].description;
    document.querySelector(".curr-desc").textContent = currCondition.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    document.querySelector(".temp-day1").textContent = `${weatherData.list[1].main.temp.toFixed(0)} F°`;
    document.querySelector(".humidity-day1").textContent = `${weatherData.list[1].main.humidity}%`;
    document.querySelector(".icon-day1").src = `https://openweathermap.org/img/w/${weatherData.list[1].weather[0].icon}.png`;
    const conditionD1 = weatherData.list[1].weather[0].description;
    document.querySelector(".desc-day1").textContent = conditionD1.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    document.querySelector(".temp-day2").textContent = `${weatherData.list[2].main.temp.toFixed(0)} F°`;
    document.querySelector(".humidity-day2").textContent = `${weatherData.list[2].main.humidity}%`;
    document.querySelector(".icon-day2").src = `https://openweathermap.org/img/w/${weatherData.list[2].weather[0].icon}.png`;
    const conditionD2 = weatherData.list[2].weather[0].description;
    document.querySelector(".desc-day2").textContent = conditionD2.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    document.querySelector(".temp-day3").textContent = `${weatherData.list[3].main.temp.toFixed(0)} F°`;
    document.querySelector(".humidity-day3").textContent = `${weatherData.list[3].main.humidity}%`;
    document.querySelector(".icon-day3").src = `https://openweathermap.org/img/w/${weatherData.list[3].weather[0].icon}.png`;
    const conditionD3 = weatherData.list[3].weather[0].description;
    document.querySelector(".desc-day3").textContent = conditionD3.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');


}