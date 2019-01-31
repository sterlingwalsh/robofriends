import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

const createBots = (count) => {
    let cards = [];
    for(let i = 0; i < count; i++){
        cards.push(<Card image={`https://robohash.org/${i}?200x200`}
                        name={i}
                        email={`${i}@fakeemail.com`} />);
    }
    console.log(cards);
    return cards;
}

ReactDOM.render(<div>{createBots(10)}</div>, document.getElementById('root'));
serviceWorker.unregister();
