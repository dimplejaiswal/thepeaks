import React, { useState } from 'react';
import './dropdown.scss';

const data = [
    { id: 0, label: 'Newest' },
    { id: 1, label: 'Oldest' },
    { id: 2, label: 'All' },
];
const Dropdown = () => {
    const [isOpen, setOpen] = useState(false);
    const [items] = useState(data);
    const [selectedItem, setSelectedItem] = useState(null);
    const toggleDropdown = () => setOpen(!isOpen);
    const handleItemClick = (id) =>
        selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
    return (
        <div
            className="dropdown"
            onClick={toggleDropdown}
            onKeyDown={toggleDropdown}
            role="button"
            tabIndex="0"
        >
            <div className="dropdown-header">
                {selectedItem
                    ? items.find((item) => item.id === selectedItem).label
                    : 'Select your destination'}
                <i className={`fa fa-chevron-right icon ${isOpen && 'open'}`}></i>
            </div>
            <div className={`dropdown-body ${isOpen && 'open'}`}>
                {items.map((item) => (
                    <div
                        className="dropdown-item"
                        id={item.id}
                        onClick={(e) => handleItemClick(e.target.id)}
                        onKeyDown={(e) => handleItemClick(e.target.id)}
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
