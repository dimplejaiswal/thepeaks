import React from 'react';
import { Link } from 'react-router-dom';
import valueAt from '../../util/valueAt';
import './card.scss';

const Card = ({ data }) => (
    <Link to={`/detail/${data.id}`}>
        <div className="card">
            <img
                className="card-img"
                src={valueAt(data, 'fields.thumbnail', '')}
                alt="Card Img"
            />
            <div className="card-text">
                <h2 className="headline">{data.webTitle}</h2>
                <p className="trail-text">{valueAt(data, 'fields.trailText', '')}</p>
            </div>
        </div>
    </Link>
);

export default React.memo(Card);
