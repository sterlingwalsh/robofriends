import React, {Component} from 'react';


class Card extends Component{
    render(){
        return(
            <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img src={this.props.image} alt='bot'/>
                <div>
                    <h2>{this.props.name}</h2>
                    <p>jane.doe@gmail.com</p>
                </div>
            </div>
        );
    }
}

export default Card;