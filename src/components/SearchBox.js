import React, {Component} from 'react';

class SearchBox extends Component{
    render(){
        const {searchChange} = this.props;
        return(
            <div className='pa2'>
                <input 
                    className="pa3 ba b--green bg-lightest-blue"
                    type='search'
                    placeholder='Search Robots'
                    onChange={searchChange}
                    aria-label="search"
                />
            </div>
        );
    }
}

export default SearchBox;