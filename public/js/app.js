const url = '/weather?address='
const weatherForm = document.querySelector('.search-form')
const search = document.querySelector('.input')
const locationText = document.querySelector('.location')
const temperature = document.querySelector('.temperature')
const feelslike = document.querySelector('.feelslike')
const weather = document.querySelector('.weather')
const errorMessage = document.querySelector('.error-message')
const weatherIcon = document.querySelector('.weathericon')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    errorMessage.textContent = ''
    locationText.textContent = ''
    temperature.textContent = ''
    feelslike.textContent = ''
    weather.textContent = 'Loading...'
    weatherIcon.src = ''

    const location = search.value

    fetch(url + location).then((response) => {
        response.json().then((data)=>{
            if(data.error){
                errorMessage.textContent = data.error
                weather.textContent = ''
            }
            else {
                errorMessage.textContent = ''
                locationText.textContent = data.location
                temperature.textContent = data.forecast.temperature + '°C'
                feelslike.textContent = data.forecast.feelslike + '°C'
                weather.textContent = data.forecast.weather
                weatherIcon.src = data.forecast.icon
            }
        })
    })
})