import React from 'react';
import { Link } from 'react-router-dom';
import valueAt from 'util/valueAt';
import DefaultImg from '../../../assets/images/bg-thepeaks.png';

const StackedHomeCard = ({ modifier, cards }) => (
    <div className={`col ${modifier}`}>
        <Link to={`/detail/${cards[0].id}`} className="link">
            <div className="card right-card">
                <img
                    className="card-img"
                    src={valueAt(cards[0], 'fields.thumbnail', DefaultImg)}
                    alt="Card Img"
                />
                <div className="card-text">
                    <h2 className="headline">{cards[1].webTitle}</h2>
                </div>
            </div>
        </Link>
        <Link to={`/detail/${cards[1].id}`} className="link">
            <div className="card-text">
                <h2 className="headline">{cards[1].webTitle}</h2>
            </div>
        </Link>
    </div>
);

export default StackedHomeCard;
