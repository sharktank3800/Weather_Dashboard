function getWeatherData() {
    var cityName = document.getElementById('city-input').value;
    var apiKey = '6ad917cff07da33c01d8bf9fd231fa55';

    if (!cityName) {
        alert('Please enter a city name.');
        return;
    }


    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey;

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network Error');
            }

            return response.json();
        })
        .then((data) => {
            var weatherDataElement = document.getElementById('weather-data');

            // Display city name
            var cityName = data.name;
            var cityNameElement = document.createElement('p');
            cityNameElement.textContent = `City: ${cityName}`;

            // Display temperature in Celsius
            var temperatureInCelsius = data.main.temp - 273.15;
            var temperatureElementCelsius = document.createElement('p');
            temperatureElementCelsius.textContent = `Temperature (Celsius): ${temperatureInCelsius.toFixed(2)} °C`;

            var temperatureInFahrenheit = (temperatureInCelsius * 9 / 5) + 32;
            var temperatureElementFahrenheit = document.createElement('p');
            temperatureElementFahrenheit.textContent = `Temperature (Fahrenheit): ${temperatureInFahrenheit.toFixed(2)} °F`;

            var windSpeed = data.wind.speed;
            var windElement = document.createElement('p');
            windElement.textContent = `Wind Speed: ${windSpeed} m/s`;

            var humidity = data.main.humidity;
            var humidityElement = document.createElement('p');
            humidityElement.textContent = `Humidity: ${humidity}%`;

            weatherDataElement.innerHTML = '';

            weatherDataElement.appendChild(cityNameElement);
            weatherDataElement.appendChild(temperatureElementFahrenheit);
            weatherDataElement.appendChild(windElement);
            weatherDataElement.appendChild(humidityElement);
        })
        .catch((error) => {
            console.error('Error with operation:', error);
        });
}