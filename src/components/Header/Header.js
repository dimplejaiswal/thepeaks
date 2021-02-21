import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import './header.scss';
import Logo from '../../../assets/images/Logo-white.png';

const Header = () => (
    <div className="header">
        <div className="nav">
            <Link to="/">
                <img src={Logo} alt="Logo" />
            </Link>
            <Search />
        </div>
    </div>
);

export default Header;
