const apiKey = '6eecea7626cdf4f4d025750897990bee';
const apiKey2 = '4d2ca4e6e3142073d2038dc0c5947677';

let apiUrl = 'https://api.openweathermap.org/data/2.5/';

export async function getWeatherDataByCityName(cityName) {
    let response = await fetch(`${apiUrl}weather?q=${cityName}&appid=${apiKey}`);
    let data = await response.json();
    return data;
}


export async function getCities() {
    let response = await fetch('./cities.json');
    let data = await response.json();
    console.log(data);
    return data;
}