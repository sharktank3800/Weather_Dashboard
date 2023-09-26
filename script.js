function initpage() {

    const cityE1 = document.getElementById("enter-city");
    const searchE1 = document.getElementById("search-button");
    const clearE1 = document.getElementById("clear-history");
    const nameE1 = document.getElementById("city-name");
    const currentPicE1 = document.getElementById("current-pic");
    const currentTempE1 = document.getElementById("temperature");
    const currentHumidityE1 = document.getElementById("humidity");
    const currentWindE1 = document.getElementById("wind-speed");
    const historyE1 = document.getElementById("history");
    var fivedayE1 = document.getElementById("fiveday-header");
    var todayweatherE1 = document.getElementById("today-weather");
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
    
    
    const APIkey = "56412d7fe69f6f317fbc3e33099ff427";


    function getWeather(cityName) {
        // Execute a current weather get request from open weather api

        let apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIkey;

        // fetch the weather data

        fetch(apiURL)
        .then(function (response){
            if(!response.ok){
                throw new Error("Network response not ok");
            }
            return response.json();
        })


        .then(function (weatherData){

            todayweatherE1.classList.remove("d-none");

            // parse response to display current weather

            const currentDate = new Date(weatherData.data.dt * 1000);
            const day = currentDate.getDate();
            const month = currentDate.getMonth();
            const year = currentDate.getFullYear();
            
            nameE1.innerHTML = weatherData.data.name + "("+ month + "/" + day + "/" + year + ")";
            let weatherPic = weatherData.data.weather[0].icon;
            currentPicE1.setAttribute("src", "https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
            currentPicE1.setAttribute("alt", weatherData.data.weather[0].description);
            currentTempE1.innerHTML = "Temperature: " + k2f(weatherData.data.main.temp) + " &#176F";
            currentHumidityE1.innerHTML = "Humidity: " + weatherData.data.main.humidity + "%";
            currentWindE1.innerHTML = "Wind Speed: " + weatherData.data.main.speed + " MPH";

        });


        // get 5 day forecast for this city





    }

};