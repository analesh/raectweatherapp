const request = require('request')


const geocode = (address,callback)=>{
    const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiYW5hbGVzaCIsImEiOiJjanV0dTlpZ3UwYXdsNDNvZ3A5bDk1bmxjIn0.h8nZGGLOvkxkq7GZiBDJqg'

    request({url:url2, json: true}, (error,response) =>{
        const  forecastdata = {
           data: response.body.features[0]
        }
        if(error){
            callback('Unable to connect to weather app')
        }else if(response.body.features.length === 0 ){
            callback('Unable to find location'+address+'. Please try another')
        }else{
            callback(undefined,{
                longitude:forecastdata.data.center[0],
                latitude:forecastdata.data.center[1],
                place: forecastdata.data.place_name
            })
        }

    })
}

module.exports=
    geocode
