import React from 'react';
import Search from '../Search/Search';
import './header.scss';
import Logo from '../../../assets/images/Logo-white.png';

const Header = () => (
    <div className="header">
        <div className="nav">
            <img src={Logo} alt="Logo" />
            <Search />
        </div>
    </div>
);

export default Header;
