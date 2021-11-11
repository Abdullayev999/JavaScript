import * as weatherApi from "./weatherApi.js"

let searchForm = document.forms.citySearch;


async function onSearch() {

    event.preventDefault();
    let cityName = searchForm.city.value;
    let weatherData = await weatherApi.getWeatherDataByCityName(cityName);

    console.log(weatherData);
}

async function onPageLoad() {
    // let cities = await weatherApi.getCities(); 
    // renderCitiesList(cities);
}

async function onTextInput() {
    let cities = await weatherApi.getCities();
    renderCitiesList(cities);
}

function renderCitiesList(cities) {
    let list = document.querySelector('#cities');
    list.innerHTML = '';
    for (const city of cities) {
        let cityOption = document.createElement('option');
        cityOption.value = city.name;
        list.append(cityOption);
    }

}
searchForm.addEventListener('submit', onSearch);
searchForm.city.addEventListener('input', onTextInput);
//document.addEventListener('DOMContentLoaded', onPageLoad);