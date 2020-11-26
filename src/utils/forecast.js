const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b9bb85ac8f919a93b72bc7ca4d84123c&query=' + latitude + ',' + longitude;
    
    request({ url, json: true}, (er,res,body) => {
        if(er) {
            callback("Unable to connect to weather service", undefined)
        }
        else if(body.error) {
            callback("Unable to find forecast for location", undefined)
        }
        else {
            callback(undefined, {
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                weather: body.current.weather_descriptions[0],
                icon: body.current.weather_icons
            })
        }
    })

}

module.exports = forecast