const request = require('request')
const geocode= (address,callback) => {
    const url ='http://api.positionstack.com/v1/forward?access_key=580a19ac3cbc5bd02faa9f9f1311ca03&limit=1&query=' + encodeURIComponent(address)
    request ({url, json: true}, (error,{body}) => { 
        console.log(body)
        if (error) {
            callback('Unable to connect to geo service')
        } else if (body.data.length ===0 ) {
            callback('Unable to find location. Try another search')
        } else {
            callback(undefined, {
                latitude: body.data[0].latitude,
                logitude: body.data[0].longitude,
                location: body.data[0].name
            })
        }
    }
    )
}

module.exports = geocode