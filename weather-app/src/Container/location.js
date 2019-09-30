import React, {Component} from 'react'
import Aux from "../hoc/Aux";
import classes from './location.css'



class Location extends Component{
    render() {
     const style={
         "text-align":"center"

     }
     var toggle=''

        return(
            <Aux>

            <div style={style} className={classes.login}>

                <h1>Enter Place Name</h1>


                <input type="text" name="username" placeholder="Enter the Place" onChange={this.props.locationchange}/>
                <input type="submit" name="submit" value="Check Weather" onClick={this.props.getDataFromDb}/>



            </div>
            </Aux>



        )
    }
}



export default Location