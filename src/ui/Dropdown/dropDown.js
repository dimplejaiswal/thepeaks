import React, { useState } from 'react';
import './dropdown.scss';
import CarrotIcon from '../../../assets/images/carrot-icon.png';

const data = [
    { id: 0, label: 'Newest' },
    { id: 1, label: 'Oldest' },
    { id: 2, label: 'All' },
];

const Dropdown = () => {
    const [isOpen, setOpen] = useState(false);
    // const [items, setItem] = useState(data);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (id) =>
        selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);

    return (
        <div className="dropdown" role="button" tabIndex="0">
            <div
                className="dropdown-header"
                onClick={toggleDropdown}
                role="button"
                tabIndex="0"
            >
                {selectedItem
                    ? data.find((item) => item.id === selectedItem).label
                    : 'Select your destination'}
                <span className={`icon ${isOpen && 'open'}`}>
                    {' '}
                    <img src={CarrotIcon} alt="&tm;" />
                </span>
            </div>
            <div className={`dropdown-body ${isOpen && 'open'}`}>
                {data.map((item) => (
                    <div
                        className="dropdown-item"
                        onClick={(e) => handleItemClick(e.target.id)}
                        id={item.id}
                        role="button"
                        tabIndex="0"
                    >
                        <span
                            className={`dropdown-item-dot ${
                                item.id === selectedItem && 'selected'
                            }`}
                        >
                            •{' '}
                        </span>
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
