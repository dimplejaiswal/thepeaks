import React from 'react';
import { Link } from 'react-router-dom';
import valueAt from '../../util/valueAt';
import './card.scss';
import Default from '../../../assets/images/bg-thepeaks.png';
const Card = ({ data }) => (
    <Link to={`/detail/${data.id}`} className="link">
        <div className="card">
            <img
                className="card-img"
                src={valueAt(data, 'fields.thumbnail', Default)}
                alt="Card Img"
            />
            <div className="card-text">
                <h2 className="headline">{data.webTitle}</h2>
                <p
                    className="trail-text"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                        __html: valueAt(data, 'fields.trailText', ''),
                    }}
                />
            </div>
        </div>
    </Link>
);

export default React.memo(Card);
