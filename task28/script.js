'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const body = document.body;

	const h1 = document.createElement('h1');
	h1.textContent = 'Погода в місті';
	body.appendChild(h1);

	const form = document.createElement('form');
	form.id = 'weatherForm';

	const label = document.createElement('label');
	label.setAttribute('for', 'city');
	label.textContent = 'Введіть назву міста:';
	form.appendChild(label);

	const input = document.createElement('input');
	input.type = 'text';
	input.id = 'city';
	input.name = 'city';
	input.required = true;
	form.appendChild(input);

	const button = document.createElement('button');
	button.type = 'submit';
	button.textContent = 'Отримати погоду';
	form.appendChild(button);

	body.appendChild(form);

	const weatherInfoDiv = document.createElement('div');
	weatherInfoDiv.id = 'weatherInfo';
	body.appendChild(weatherInfoDiv);
});

$(document).ready(() => {
	$('#weatherForm').submit(event => {
		event.preventDefault();
		const city = $('#city').val();
		getWeather(city);
	});

	const getWeather = city => {
		const apiKey = 'a7cc991804459936fe8779348740c67b';
		const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

		$.ajax({
			url: apiUrl,
			method: 'GET',
			success: data => {
				displayWeather(data);
			},
			error: error => {
				console.log('Error:', error);
			},
		});
	};

	const displayWeather = data => {
		const weatherInfo = $('#weatherInfo');
		weatherInfo.html(`
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Температура: ${data.main.temp}°C</p>
      <p>Тиск: ${data.main.pressure} hPa</p>
      <p>Опис: ${data.weather[0].description}</p>
      <p>Вологість: ${data.main.humidity}%</p>
      <p>Швидкість вітру: ${data.wind.speed} м/с</p>
      <p>Напрям вітру: ${data.wind.deg}°</p>
      <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">
    `);
	};
});
