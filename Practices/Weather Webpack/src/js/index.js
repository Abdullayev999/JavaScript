import '../scss/style.scss'
import $ from 'jquery'
import cityTemplate from '../html/cityTemplate.html'
import Handlebars from 'handlebars'

console.log(cityTemplate);
const apiKey = '4d2ca4e6e3142073d2038dc0c5947677';

function renderCity(data) {
    let template = Handlebars.compile(cityTemplate);
    let result = template(data);
    $('#cities').append(result);
}


function addMap(elem, coords) {
    map = new google.maps.Map(elem, {
        center: {
            lat: coords.lat,
            lng: coords.lon
        },
        zoom: 11
    });
}

$('#citySearch').submit(async function(e) {
    e.preventDefault();
    let name = $('#cityName').val();

    try {
        let data = await $.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${apiKey}`).promise();
        console.log(data);
        renderCity(data);
        addMap($('.map:last')[0], data.coord);
    } catch (error) {
        console.log('City not found!!!');
    }
});



$('#cities').on('click', '.header', function(e) {
    e.preventDefault();
    $('#cities .description')
        .not($(this).next())
        .slideUp();

    $('#cities .header')
        .not(this)
        .find('i')
        .removeClass('fa-minus-square')
        .addClass('fa-plus-square');

    $(this).next().slideToggle();

    $(this).find('i')
        .toggleClass('fa-plus-square')
        .toggleClass('fa-minus-square');

    // $('#cities').off('click'); //snatie eventa
});


$('form').draggable().resizable();