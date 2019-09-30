
const request = require('request')

const forecast = (latitude,longitude,callback)=>{
    const url ='https://api.darksky.net/forecast/412687225b68092cb35deafa29a10300/'+latitude+','+longitude+'?units=si'
  request({ url: url , json:true}, (error,{body}) =>{
      if(error){
          callback('Unable to connect to weather app')
      }else if(body.error){
          callback('Unable to find forecast.')
      }else{
          callback(undefined,{
            temparature:body.currently.temperature,
              summary:body.currently.summary,
              icons:body.currently.icon
          })
      }
  })
}


module.exports=forecast