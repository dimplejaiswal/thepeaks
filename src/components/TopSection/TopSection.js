import React from 'react';
import { Link } from 'react-router-dom';
import BookmarkButton from '../BookmarkButton/BookmarkButton';
import { OrderBy } from '../OrderBy/OrderBy';

import './topSection.scss';

const TopSection = ({ onItemClick, heading }) => (
    <div className="top-section">
        <h1 className="heading"> {heading} </h1>
        <div className="right">
            <Link className="link" to="/bookmark">
                <BookmarkButton text="VIEW BOOKMARK" />
            </Link>
            <OrderBy onItemClick={onItemClick} />
        </div>
    </div>
);

export default TopSection;
