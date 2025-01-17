/** @format */

const apiKey = 'cc78e0f52239e630f22cda3b8066ddb9';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
  } else {
    var data = await response.json();

  console.log(data);

  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
  document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
  document.querySelector('.humidity').innerHTML = data.main.humidity + '%';

  if (data.weather[0].main == 'Clouds') {
    document.querySelector('.weather-icon').src = '/weather-app-img/clouds.png';
  } else if (data.weather[0].main == 'Rain') {
    document.querySelector('.weather-icon').src = '/weather-app-img/rain.png';
  } else if (data.weather[0].main == 'Drizzle') {
    document.querySelector('.weather-icon').src =
      '/weather-app-img/drizzle.png';
  } else if (data.weather[0].main == 'Mist') {
    document.querySelector('.weather-icon').src = '/weather-app-img/mist.png';
  } else if (data.weather[0].main == 'Snow') {
    document.querySelector('.weather-icon').src = '/weather-app-img/snow.png';
  } else if (data.weather[0].main == 'Wind') {
    document.querySelector('.weather-icon').src = '/weather-app-img/wind.png';
  }

    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';
}
  
}

searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);
});
