const apiKey = '0707533635cf58c0b814052d966828c6'; // Paste your actual key here

async function getWeather() {
    try {
        const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=Coventry,UK&units=imperial&appid=${apiKey}`
    );

        
        if (!response.ok) throw new Error('Weather data not available');
        
        const data = await response.json();
        
        // Current weather
        const current = data.list[0];
        document.getElementById('current-temp').textContent = 
            ${Math.round(current.main.temp)}°C;
        document.getElementById('weather-condition').textContent = 
            current.weather[0].description;
        
        // 3-day forecast
        const forecast = data.list.filter(item => 
            item.dt_txt.includes('12:00:00')
        ).slice(0, 3);
        
        const forecastDiv = document.getElementById('forecast');
        forecastDiv.innerHTML = forecast.map(day => `
            <div class="forecast-day">
                <p>${new Date(day.dt * 1000).toLocaleDateString('en-GB', { weekday: 'short' })}</p>
                <p>${Math.round(day.main.temp)}°C</p>
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('weather-info').innerHTML = `
            <p class="error">Weather data currently unavailable</p>
        `;
    }
}

// Call the function when page loads
window.addEventListener('load', getWeather);