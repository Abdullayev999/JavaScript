let apiKey = '6eecea7626cdf4f4d025750897990bee';
let url = 'https://api.openweathermap.org/data/2.5/forecast';

$('.week').hide();
$('.detail').hide();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let listForWeak = [];

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toISOString().slice(0, 10);
}

$('#myForm').submit(async function(e) {
    e.preventDefault();

    let city = $('#searchName').val();
    try {
        let data = await $.get(`${url}?q=${city}&units=metric&appid=${apiKey}`).promise();

        if (data) {

            $('.detail').show(200);
            $('.week').show(500);
            $('#city').text(data.city.name);
            $('#date').text(data.list[0].dt_txt);
            $('#temp').text(data.list[0].main.temp + " ℃");
            $('#wind').text(`Wind :  ${data.list[0].wind.speed}`);
            $('#precip').text(`Humidity :  ${data.list[0].main.humidity}`);
            $('#pressure').text(`Pressure :  ${data.list[0].main.pressure}`);
            $('#img').attr('src', `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`);

            let templateHtml = $('#templateHtml').html();
            let templateFunc = Handlebars.compile(templateHtml);

            let date = new Date().toISOString().slice(0, 10);


            $('.week').html(' ');
            for (const element of data.list) {
                if (element.dt_txt.slice(0, 10) == date) {
                    listForWeak.push(element);
                    date = addDays(date, 1);

                    let newData = {
                        dayOfWeek: days[new Date(element.dt_txt).getDay()],
                        data: element.dt_txt.slice(0, 10),
                        icon: element.weather[0].icon,
                        temp: element.main.temp
                    }
                    let item = templateFunc(newData);
                    $('.week').append(item);
                }
            }
        }
    } catch (error) {
        console.error(error);
    }
});