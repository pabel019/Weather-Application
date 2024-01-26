const apiKey = "1b3b2f7281175276e85aace560566053";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const image = document.querySelector(".weather-img-icon");

async function checkWeather(city) {
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
	if (response.status === 404) {
		const errorCheck = document.querySelector(".error");
		errorCheck.style.display = "block";
		document.querySelector(".weather").style.display = "none";
		document.querySelector(".details").style.display = "none";
	} else {
		let data = await response.json();

		const cityName = document.querySelector(".city");
		cityName.innerHTML = data.name;
		const temperature = document.querySelector(".temp");
		temperature.innerHTML = Math.round(data.main.temp) + "°F";
		const parcentage = document.querySelector(".parcentage");
		parcentage.innerHTML = data.main.humidity + "%";
		const speed = document.querySelector(".speed");
		speed.innerHTML = data.wind.speed + "  " + "km/h";

		if (data.weather[0].main == "Clouds") {
			image.src = "./images/clouds.png";
		} else if (data.weather[0].main == "Clear") {
			image.src = "./images/clear.png";
		} else if (data.weather[0].main == "Rain") {
			image.src = "./images/rain.png";
		} else if (data.weather[0].main == "Drizzle") {
			image.src = "./images/drizzle.png";
		} else if (data.weather[0].main == "Mist") {
			image.src = "./images/mist.png";
		}
		document.querySelector(".error").style.display = "none";
		document.querySelector(".weather").style.display = "block";
		document.querySelector(".details").style.display = "flex";
	}
}
// event
searchBtn.addEventListener("click", () => {
	checkWeather(searchBox.value);
});
// checkWeather();
