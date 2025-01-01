async function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = '7057372ba6f4b880960bce8f020de146'; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === 200) {
          const weather = `
              <h2>Weather in ${data.name}</h2>
              <img class="weather-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
              <p>Temperature: ${data.main.temp}°C</p>
              <p>Weather: ${data.weather[0].description}</p>
              <p>Humidity: ${data.main.humidity}%</p>
              <p>Wind Speed: ${data.wind.speed} m/s</p>
              <p>Pressure: ${data.main.pressure} hPa</p>
          `;
          document.getElementById('weather').innerHTML = weather;
      } else {
          document.getElementById('weather').innerHTML = 'City not found.';
      }
  } catch (error) {
      console.error('Error fetching weather data:', error);
      document.getElementById('weather').innerHTML = 'An error occurred. Please try again later.';
  }
}
