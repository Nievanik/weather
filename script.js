temp = document.querySelector('.temp')
feels_like = document.querySelector('.fells_like')
humidity = document.querySelector('.humidity')
wind_speed = document.querySelector('.wind_speed')
city = document.querySelector('.city')
weather_location = document.querySelector('.location')
search_btn = document.querySelector('.btn')

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '60c0d2301emsh9ea8bce871ba785p1018c5jsnda0a16873841',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
function getWeather(city) {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            // console.log(response)
            weather_location.innerHTML = city
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            wind_speed.innerHTML = response.wind_speed
            
            // cloud_pct.innerHTML = response.cloud_pct
            // wind_degrees.innerHTML = response.wind_degrees

        })
        .catch((err) => {
            console.log("Error:" ,err);
        })
}

search_btn.addEventListener('click',(event)=>{
    event.preventDefault()
    getWeather(city.value);
})


getWeather("Bhaktapur")
 
