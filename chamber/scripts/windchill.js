// Get the values temeprature and wind speed
let temperature = document.querySelector("#temperature").innerHTML;
let windSpeed = document.querySelector("#windSpeed").innerHTML;

// Convert the values to numbers (float and integers)
let temperatureValue = parseInt(temperature);
let windSpeedValue = parseFloat(windSpeed);

// Convert Celsius to Fahrenheit and k/m to m/h
const fahTemperature = (temperatureValue * 9/5) + 32;
const mileSpeed = windSpeedValue * 0.62137;

// Create a function that calculates the wind chill
function calculateWindChill(temp, wspeed) {
    // A conditional to make sure the values meet the requirements
    if (temp <= 50 && mileSpeed > 3.0) {

        // if True calculate the wind chill        
        let windChill = 35.74 + (0.6215 * temp) - (35.75 * (wspeed ** 0.16)) + (0.4275 * (temp * (wspeed ** 0.16)))

        let showWindChill = `${windChill.toFixed(2)}°F`
        return showWindChill;
    }

    else {
        return "N/A";
    }
}

document.querySelector("#windChillValue").innerHTML = calculateWindChill(fahTemperature, mileSpeed);