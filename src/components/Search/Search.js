import React, { useState, useCallback, useEffect, useRef } from 'react';
import Icon from '../../../assets/images/search-icon@2x.svg';
import './search.scss';

const Search = () => {
    const wrapperRef = useRef(null);
    const [value, setValue] = useState('');
    const [showBox, setShowBox] = useState(false);

    const handleClickOutside = useCallback((event) => {
        if (wrapperRef && !wrapperRef.current.contains(event.target)) {
            setShowBox(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <div className="search" ref={wrapperRef}>
            {showBox && (
                <input
                    className="input"
                    value={value}
                    placeholder="Search all news"
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                />
            )}
            <button className="btn-icon" type="button" onClick={() => setShowBox(true)}>
                <img className="searchcon" src={Icon} alt="SearchIcon" />
            </button>
        </div>
    );
};

export default Search;
