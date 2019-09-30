import React, {Component} from 'react';
import Aux from '../src/hoc/Aux'
import Location from '../src/Container/location'
import Weather from  '../src/Container/Weather'
import calsses from './App.css'
import image from './image.jpg'


class App extends Component{

    state = {
        data:{
            place:"",
            temparature:"",
            summary:"",
            icons:""
        },
        location:'',
        toggle:true
    }

    locationchange = (event)=>{
         var locationob = {...this.state.location}
         locationob =event.target.value;
        this.setState({location:locationob})
    }



    getDataFromDb = () => {
        fetch('/weather?address='+this.state.location+'',
            {}
            )
            .then((data) => data.json())
            .then((res) => this.setState({ data: res},));
        this.setState({toggle:!this.state.toggle})
    };



  render() {

    return(
        <Aux >
            {this.state.toggle ?
                <Location
                    locationchange={this.locationchange}
                    getDataFromDb={this.getDataFromDb}


                />: <Weather
                    data={this.state.data}
                    location={this.state.location}
                    getDataFromDb={this.getDataFromDb}
                />
            }



        </Aux>
    )
  }
}

export default App;
