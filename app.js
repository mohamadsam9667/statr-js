// Simulating the data fetching and interaction with API
document.getElementById("search-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const cityName = document.getElementById("city-name").value;

    // Example data - in real app, you would call an API here
    const weatherData = {
        city: cityName,
        temperature: "22°C",
        description: "آفتابی",
        humidity: "60%",
    };

    const forecastData = {
        day1: { temp: "25°C", description: "آفتابی" },
        day2: { temp: "23°C", description: "ابری" },
        day3: { temp: "21°C", description: "بارانی" }
    };

    const alertData = {
        status: "آفتابی"
    };

    // Display the data on the page
    displayWeather(weatherData);
    displayForecast(forecastData);
    displayAlerts(alertData);
});

// Function to display the weather data
function displayWeather(data) {
    const weatherInfo = document.getElementById("weather-info");
    weatherInfo.innerHTML = `
        <h3>وضعیت آب و هوا در ${data.city}</h3>
        <p>دما: ${data.temperature}</p>
        <p>وضعیت: ${data.description}</p>
        <p>رطوبت: ${data.humidity}</p>
    `;
}

// Function to display the weather forecast
function displayForecast(data) {
    const forecast = document.getElementById("forecast");
    forecast.innerHTML = `
        <h3>پیش‌بینی وضعیت آب و هوا</h3>
        <p>روز اول: دما - ${data.day1.temp}, وضعیت - ${data.day1.description}</p>
        <p>روز دوم: دما - ${data.day2.temp}, وضعیت - ${data.day2.description}</p>
        <p>روز سوم: دما - ${data.day3.temp}, وضعیت - ${data.day3.description}</p>
    `;
}

// Function to display the weather alerts
function displayAlerts(data) {
    const alerts = document.getElementById("weather-alerts");
    alerts.innerHTML = `
        <h3>اعلان وضعیت آب و هوا</h3>
        <p>وضعیت امروز: ${data.status}</p>
    `;
}
