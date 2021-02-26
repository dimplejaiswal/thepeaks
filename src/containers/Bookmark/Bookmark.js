import React from 'react';
import { getBookMarkItems } from 'util/bookmark';
import Empty from '../../components/Empty/Empty';
import CardWrapper from '../../components/CardWrapper/CardWrapper';
import './bookmark.scss';

const Bookmark = () => {
    const items = getBookMarkItems();

    if (!items.length) return <Empty />;

    return (
        <div className="bookmarks-container">
            <h1 className="heading">All bookmarks</h1>
            <CardWrapper results={items} />
        </div>
    );
};

export default Bookmark;
