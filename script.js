const search = document.querySelector('.search');
const btn = document.getElementById('btn');
const weatherImg = document.querySelector('.weather');
const temp = document.querySelector('.temp');
const des = document.querySelector('.des');
const windSpeed = document.getElementById('wind');
const humid = document.getElementById('humidity');
const place = document.querySelector('.location') ;
const msg = document.querySelector('.msg');





async function knowWeather(city){

    try {
    const key = 'dc11824e4b3d131f8f7bf314514b0696'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    const weather_details = await fetch(`${url}`)
    .then(response => response.json());

    if(weather_details.cod === '400') {
        console.log('error')
    }
    

    temp.innerHTML = `${Math.floor(weather_details.main.temp - 273.)}°C`
    place.innerHTML = `${weather_details.name}`

    des.innerHTML = `${weather_details.weather[0].description}`
    windSpeed.innerHTML = `${weather_details.wind.speed}km/h`
    humid.innerHTML = `${weather_details.main.humidity}%`

    search.value = ''
    msg.innerHTML= ''

    switch(weather_details.weather[0].main) {
        case 'Clouds':
            weatherImg.src = '/images/colud.jpg';
                break;
        case 'Clear':
            weatherImg.src = '/images/clear.jpg';
                break;
        case 'Rain':
            weatherImg.src = '/images/rain.jpg';
                break;
        case 'Snow':
            weatherImg.src = '/images/snow.jpg';
                break;
        case 'Sunny':
            weatherImg.src = '/images/sunny.jpg';
                break;
        case 'Storm':
            weatherImg.src = '/images/stormy.jpg';
                break;

    }

    

    console.log(weather_details)
}catch (error){
    alert(error)
    console.log(error)
    msg.innerHTML = 'enter a correct location'
}
}



btn.addEventListener('click', ()=> {
     knowWeather(search.value);
 })