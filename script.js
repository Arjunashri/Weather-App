
async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "fe7ba8019329d9b676e2f154eb748e85"; 

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );

  const data = await response.json();

  const result = document.getElementById("result");

  if (data.cod === "404") {
    result.innerHTML = `<p>City not found</p>`;
  } else {
    result.innerHTML = `
      <p><strong>City:</strong> ${data.name}</p>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Condition:</strong> ${data.weather[0].main}</p>
    `;
  }
}
