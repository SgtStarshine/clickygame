import React from 'react';
import './card.scss';

function Card(props) {
    return (
        <div className="card" onClick={() => props.handleClick(props.id)}>        
            <img src={props.image} alt={props.name} />
        </div>     
    )
}

export default Card;