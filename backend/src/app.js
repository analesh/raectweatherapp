const express = require('express');
const  path = require('path');
const hbs = require('hbs');
const app = express();
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const port = process.env.PORT || 3001

//Define Paths for express config
const publicdirectory = path.join(__dirname,'../public');
const viewsdirectory = path.join(__dirname,'../templates/views')
const partialsdirectory = path.join(__dirname, '../templates/partials');

if(process.env.NODE_ENV ==="production"){
    app.use(express.static("../../weather-app/build"))
}

// Setup handelbars and view location
app.set('view engine', 'hbs');
app.set('views', viewsdirectory);
hbs.registerPartials(partialsdirectory);


//setup static dir to serve
//app.use(express.static(publicdirectory));


app.get('', (req,res) =>{
    res.render( 'index', {
        title:'Weather',
        name:'Analesh'
    })
});
app.get('/about', (req,res) =>{
    res.render( 'about', {
        title:'About',
        name:'Analesh'
    })
});
app.get('/help', (req,res) =>{
    res.render( 'help', {
        title:'Any help?',
        name:'Analesh'
    })
});
app.get('/help/*', (req,res)=>{
    res.render('404', {
        title: '404',
        name: 'Analesh',
        errormsg: 'Help Article Not Found'
    })
})

app.get('/weather', (req,res)=>{
    if(!req.query.address){
        return res.send({
            error: 'you must enter address'
        })
    }
    geocode(req.query.address,(error,{latitude,longitude,place} = {}) =>{

        if(error){
            return res.send({
                error:error
            })
        }
        forecast(latitude,longitude,(error,forecastdata)=>{
            const{temparature,summary,icons}=forecastdata
            if (error) {
               return res.send({
                    error:error
                })
            }
            res.json({
                place:place,
                temparature:temparature,
                summary:summary,
                icons:icons

            })
        })



    })

})
app.get('/products', (req,res)=>{

    if(!req.query.search){
        return res.send({
            error : 'You must provide search '
        })
    }
    res.send({
        search:req.query.search
    })


})
app.get('*', (req,res)=>{
    res.render('404',{
        title:'404',
        name:'Analesh',
        errormsg:'Page Not Found'

    })
})



app.listen(port, () =>{
    console.log('Server is started in port'+port+' ')
});