import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Icon from '../../../assets/images/search-icon@2x.svg';
import './search.scss';

const Search = () => {
    const wrapperRef = useRef(null);
    const [value, setValue] = useState('');
    const [showBox, setShowBox] = useState(false);
    const history = useHistory();

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

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && value) {
            setValue('');
            setShowBox(false);
            history.push(`/search/${value}`);
        }
    };

    const handleSearchIconClick = () => {
        if (!showBox) {
            setShowBox(true);
            return;
        }
        if (value) {
            setValue('');
            setShowBox(false);
            history.push(`/search/${value}`);
        }
    };

    return (
        <div className="search" ref={wrapperRef}>
            {showBox && (
                <input
                    className="input"
                    value={value}
                    placeholder="Search all news"
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    type="text"
                />
            )}
            <button className="btn-icon" type="button" onClick={handleSearchIconClick}>
                <img className="searchcon" src={Icon} alt="SearchIcon" />
            </button>
        </div>
    );
};

export default Search;
