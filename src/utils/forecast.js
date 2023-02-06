const request = require('request')
const forecast = (latitude,longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=68695a2cf135cd5e38ddc93841be4f25&query=' + latitude + ',' + longitude
    console.log(url)
    request({ url,json: true}, (error,{body}) => {
        if (error) {
            callback("Unable to connect to weather service")
        } else if (body.error) {
            callback("Unable to find location")
        }  
        else {
            callback(undefined,body.current.weather_descriptions[0] +". It is currently " + body.current.temperature + " degress out. It feels like " + body.current.feelslike + " degrees out. Wind speed is " + body.current.wind_speed + " from " + body.current.wind_dir+ ".")
             }
        })
}

module.exports = forecast