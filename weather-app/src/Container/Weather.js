import React,{Component} from 'react'
import classes from './Weather.css'
import Icon from '../../src/Components/Icons'

class weather extends Component{
    render() {
       var iconss=''
        switch(this.props.data.icons) {
            case('clear-day'):
                iconss = 'CLEAR_DAY'
                break;
            case('clear-night'):
                iconss = 'CLEAR_NIGHT'
                break;
            case('cloudy'):
                iconss = 'CLOUDY'
                break;
            case('fog'):
                iconss = 'FOG'
                break;
            case('partly-cloudy-day'):
                iconss = 'PARTLY_CLOUDY_DAY'
                break;
            case('partly-cloudy-night'):
                iconss = 'PARTLY_CLOUDY_NIGHT'
                break;
            case('rain'):
                iconss = 'RAIN'
                break;
            case('sleet'):
                iconss = 'SLEET'
                break;
            case('snow'):
                iconss = 'SNOW'
                break;
            case('wind'):
                iconss = 'WIND'
                break;
            default:
                iconss = ''
                break;
        }

        var mydate=new Date()
        var year=mydate.getYear()
        if(year<1000)
            year+=1900

        var day=mydate.getDay()
        var month=mydate.getMonth()
        var daym=mydate.getDate()
        if(daym<10)
            daym="0"+daym
        var dayarray=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        var montharray=["January","February","March","April","May","June","July","August","September","October","November","December"]
        var integer = parseInt(this.props.data.temparature, 10)
        var dispaly_day=dayarray[day]
        var dispaly_date=daym+"  "+montharray[month]+"  "+year

        return(

            <div className={classes.mainwthreerow}>
                <div className={classes.agileinfo}>
                    <div className={classes.date}>
                        <p> {dispaly_day}</p>
                        <p> {dispaly_date}</p>
                    </div>
                    <h2>{integer}<span>°</span></h2>
                    <h4>{this.props.location}</h4>
                    <Icon
                    icons={iconss}
                    />
                    <h6>{this.props.data.summary}</h6>

                    <input type="submit" name="submit" value="Check Other City" onClick={this.props.getDataFromDb}/>
                </div>
            </div>

        )
    }
}


export default weather