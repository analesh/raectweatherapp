import React, {Component} from 'react'


class Aux extends Component{
    render() {
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Aux;