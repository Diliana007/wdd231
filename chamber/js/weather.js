
 const apiKey = '0707533635cf58c0b814052d966828c6'; 
const city = 'Coventry, UK';

async function getWeather() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${Coventry}&units=metric&appid=${'0707533635cf58c0b814052d966828c6'}`
        );
        
        if (!response.ok) throw new Error('Weather data not available');
        
        const data = await response.json();
        
        // Current weather
        document.getElementById('current-temp').textContent = 
            ${Math.round(data.list[0].main.temp)}°C;
        document.getElementById('weather-condition').textContent = 
            data.list[0].weather[0].description;
        
        // 3-day forecast
        const forecast = data.list.filter(item => 
            item.dt_txt.includes('12:00:00')
        ).slice(0, 3);
        
        const forecastHTML = forecast.map(day => `
            <div class="forecast-day">
                <p>${new Date(day.dt * 1000).toLocaleDateString('en-GB', { weekday: 'short' })}</p>
                <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png" 
                     alt="${day.weather[0].description}">
                <p>${Math.round(day.main.temp)}°C</p>
            </div>
        `).join('');
        
        document.getElementById('forecast').innerHTML = forecastHTML;
        
    } catch (error) {
        console.error('Weather error:', error);
        document.getElementById('weather-info').innerHTML = 
            '<p class="error">Weather data currently unavailable</p>';
    }
}

// Initialize when page loads
window.addEventListener('load', getWeather);