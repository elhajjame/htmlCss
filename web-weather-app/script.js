

const apiKey = "be670a1389eafd9b8736cce1a056a2cf";

const cityInput = document.querySelector('.city-input');
const searchBtn = document.querySelector('.search-btn');
const weatherConditions = document.querySelector('.condition-txt');
const cityTxt = document.querySelector('.city-txt');
const tempTxt = document.querySelector('.temp-txt');
const windValue = document.querySelector('.wind-value');
const humidityValue = document.querySelector('.humidty-value');
const dataTxt = document.querySelector('.date-txt');
const weatherStatus = document.querySelector('.condition-txxt');

const date = new Date();
const weatherConditionIMG = document.querySelector('.weather-status-img');
async function fetchData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Could not fetch data');
        const data = await response.json();
        console.log(data.weather[0].main);

        weatherStatus.textContent = data.weather[0].main;
        cityTxt.textContent = data.name;
        tempTxt.textContent = Math.round(data.main.temp) + "°C";
        // weatherConditions.textContent = data.weather[0].main;
        windValue.textContent = data.wind.speed + " Km/h";
        humidityValue.textContent = data.main.humidity + " %";
        dataTxt.textContent = date.toDateString();

       const icon = getIcon(data.weather[0].main);
weatherConditionIMG.src = `assets/weather/${icon}`

    } catch (error) {
        console.error(error);
        showError("City not found");
    }
}

function getIcon(condition) {
    condition = condition.toLowerCase();
    if(condition === 'snow') return 'snowy.svg';
    if(condition === 'rain') return 'rainy.svg';
    if(condition === 'clear') return 'clear.svg';
    if(condition === 'clouds') return 'cloudy.svg';
    if(condition === 'drizzle') return 'drizzle.svg';
    if(condition === 'thunderstorm') return 'thunderstorm.svg';
    if(condition === 'atmosphere') return 'atmosphere.svg';

    if (
        condition === "mist" ||
        condition === "fog" ||
        condition === "haze" ||
        condition === "smoke" ||
        condition === "dust"
    ) return "atmosphere.svg"

     return "default.svg";

}

searchBtn.addEventListener("click", () => {
    const cityName = cityInput.value.trim();
    if (cityName) fetchData(cityName);
});

cityInput.addEventListener('keydown', function (e) {

    if (e.key === 'Enter') {
        const cityName = cityInput.value.trim();

        if (cityName) fetchData(cityName);
    }
    console.log(e.key);
})
fetchData('Casablanca');


function showError(msg){
    const erroor = document.querySelector('.div-error1');
    erroor.innerHTML = msg
    erroor.classList.add('show')

     setTimeout(() => {erroor.classList.remove('show')}, 1900)
}

