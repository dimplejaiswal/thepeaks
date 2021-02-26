import React from 'react';
import Dropdown from 'ui/Dropdown/Dropdown';

const data = [
    { id: 0, label: 'Newest', value: 'newest' },
    { id: 1, label: 'Oldest', value: 'oldest' },
    { id: 2, label: 'All', value: 'relevance' },
];

const OrderBy = ({ onItemClick }) => <Dropdown data={data} onItemClick={onItemClick} />;

export { OrderBy, data };
