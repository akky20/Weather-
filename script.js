let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value;
    let finalURL = `https://goweather.herokuapp.com/weather/${countryName}`;
    console.log(finalURL);
    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data[0])
            console.log(data.description)
            console.log(data.temperature)
            console.log(data.wind)
            console.log(data.forecast[0].day)
            console.log(data.forecast[0].temperature)
            console.log(data.forecast[0].wind)
            console.log(data.forecast[1].day)
            console.log(data.forecast[1].temperature)
            console.log(data.forecast[1].wind)


            result.innerHTML = `
            <h1 id="InitialDesc" >${data.description}</h1>
            <div class="initial">
            <h2>Temperature: ${data.temperature}</h2>
            <h2>Wind: ${data.wind}</h2>
            </div>

            <div class="forecast">
                <h2>Forecast-</h2>

                <div class="forecastDay">
                    <h3>Day: ${data.forecast[0].day}</h3>
                    <h3>Temperature: ${data.forecast[0].temperature}</h3>
                    <h3>Wind: ${data.forecast[0].wind}</h3>
                </div>

                <div class="forecastDay">
                    <h3>Day: ${data.forecast[1].day}</h3>
                    <h3>Temperature: ${data.forecast[1].temperature}</h3>
                    <h3>Wind: ${data.forecast[1].wind}</h3>
                </div>
            </div>


            `;
        })
        .catch(() => {
            if (countryName.length == 0) {
              result.innerHTML = `<h3>The input field cannot be empty</h3>`;
            } else {
              result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
            }
          });
})