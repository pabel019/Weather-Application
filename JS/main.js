const apiKey = "cf8e7c4d1881b2551fe4c02986c0dea0";
const apiUrl =
	"https://api.openweathermap.org/data/2.5/weather?q=&units=metric";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
	const response = await fetch(apiUrl + city + `&appid = ${apiKey}`);
	const data = await response.json();
	console.log(data);

	const cityName = document.querySelector(".city");
	cityName.innerHTML = data.name;
	const temperature = document.querySelector(".temp");
	temperature.innerHTML = Math.round(data.main.temp) + "°c";
	const parcentage = document.querySelector(".parcentage");
	parcentage.innerHTML = data.main.humidity + "%";
	const speed = document.querySelector(".speed");
	speed.innerHTML = data.wind.speed + "  " + "km/h";
}
// event
searchBtn.addEventListener("click", () => {
	checkWeather(searchBox.value);
});
