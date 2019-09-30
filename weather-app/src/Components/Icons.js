import React,{Component} from 'react'
import ReactAnimatedWeather from 'react-animated-weather';

class icon extends Component{
    ;

    render(){
        const defaults = {
            icon: this.props.icons,
            color: 'white',
            size: 51,
            animate: true
        };



        return(
           <ReactAnimatedWeather
               icon={defaults.icon}
               color={defaults.color}
               size={defaults.size}
               animate={defaults.animate}
               />


        )
    }
}

export default icon;