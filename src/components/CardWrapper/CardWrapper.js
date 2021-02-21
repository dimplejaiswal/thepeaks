import React from 'react';
import Card from '../Card/Card';

import './cardWrapper.scss';

const CardWrapper = ({ results }) => (
    <div className="card-wrapper">
        {results.map((data, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Card key={`${data.id}/${index}`} data={data} />
        ))}
    </div>
);

export default CardWrapper;
