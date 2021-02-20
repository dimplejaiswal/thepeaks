import React from 'react';

import './card.scss';

const Card = ({ data }) => (
    <div className="card">
        <img className="card-img" src={data.fields.thumbnail} alt="Card Img" />
        <div className="card-text">
            <h2 className="headlind">{data.webTitle}</h2>
            <p className="trail-text">{data.fields.trailText}</p>
        </div>
    </div>
);

export default Card;
