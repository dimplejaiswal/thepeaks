import React, { useState, useEffect, useCallback, useRef } from 'react';
import './dropdown.scss';
import CarrotIcon from '../../../assets/images/carrot-icon.png';

const Dropdown = ({ data, onItemClick }) => {
    const wrapperRef = useRef(null);
    const [isOpen, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(data[0].value);

    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (value) => {
        if (selectedItem !== value) {
            setSelectedItem(value);
            setOpen(false);
            // eslint-disable-next-line no-unused-expressions
            onItemClick && onItemClick(value);
        }
    };

    const handleClickOutside = useCallback(
        (event) => {
            if (wrapperRef && !wrapperRef.current.contains(event.target)) {
                setOpen(false);
            }
        },
        [setOpen]
    );

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <div className="dropdown" role="button" tabIndex="0" ref={wrapperRef}>
            <div
                className="dropdown-header"
                onClick={toggleDropdown}
                role="button"
                tabIndex="0"
            >
                {data.find((item) => item.value === selectedItem).label}
                <span className={`icon${isOpen ? ' open' : ''}`}>
                    {' '}
                    <img src={CarrotIcon} alt="&tm;" />
                </span>
            </div>
            {isOpen && (
                <div className={`dropdown-body${isOpen ? ' open' : ''}`}>
                    {data.map((item) => (
                        <div
                            className={`dropdown-item${
                                item.value === selectedItem ? ' selected' : ''
                            }`}
                            onClick={() => handleItemClick(item.value)}
                            value={item.value}
                            role="button"
                            tabIndex="0"
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
