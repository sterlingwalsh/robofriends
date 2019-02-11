import React, {Component} from 'react'

import './scroll.css'

class Scroll extends Component{
    render(){
        return(
            <div className="scrollDiv">
                {this.props.children}
            </div>
        );
    }
}

export default Scroll;