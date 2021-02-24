import React from 'react';
import { getBookMarkItems } from 'util/bookmark';
import Empty from '../../components/Empty/Empty';
import CardWrapper from '../../components/CardWrapper/CardWrapper';

const Bookmark = () => {
    const items = getBookMarkItems();

    if (!items.length) return <Empty />;

    return <CardWrapper results={items} />;
};

export default Bookmark;
