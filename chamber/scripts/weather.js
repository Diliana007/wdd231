// Weather API Configuration
const apiKey = '0707533635cf58c0b814052d966828c6';
const city = 'Coventry';
const countryCode = 'GB';

async function fetchWeather() {
    try {
        // First get coordinates
        const geoResponse = await fetch(
            `https://api.openweathermap.org/geo/1.0/direct?q=${city},${countryCode}&limit=1&appid=${apiKey}`
        );
        
        if (!geoResponse.ok) {
            throw new Error('Failed to fetch location data');
        }

        const geoData = await geoResponse.json();
        
        if (!geoData || geoData.length === 0) {
            throw new Error('Location not found');
        }

        const { lat, lon } = geoData[0];
        
        // Then get weather data
        const weatherResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
        );
        
        if (!weatherResponse.ok) {
            throw new Error(`HTTP error! status: ${weatherResponse.status}`);
        }

        const weatherData = await weatherResponse.json();
        displayWeather(weatherData);
        
    } catch (error) {
        console.error('Error fetching weather:', error);
        const weatherContainer = document.getElementById('weather-container');
        if (weatherContainer) {
            weatherContainer.innerHTML = `
                <div class="error">
                    <p>⚠ Weather data unavailable</p>
                    <p>${error.message}</p>
                    <button onclick="fetchWeather()">Try Again</button>
                </div>
            `;
        }
    }
}

function displayWeather(data) {
    const weatherElement = document.getElementById('current-weather');
    if (!weatherElement) return;
    
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    
    weatherElement.innerHTML = `
        <div class="weather-display">
            <img src="${iconUrl}" alt="${data.weather[0].description}">
            <div class="weather-info">
                <span class="temp">${Math.round(data.main.temp)}°C</span>
                <span class="condition">${data.weather[0].description}</span>
                <div class="details">
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind: ${(data.wind.speed * 3.6).toFixed(1)} km/h</p>
                    <p>Pressure: ${data.main.pressure} hPa</p>
                </div>
            </div>
        </div>
    `;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', fetchWeather);