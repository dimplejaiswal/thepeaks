import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import Dropdown from 'ui/Dropdown/dropDown';

const Navbar = (props) => (
    <div>
        <Header />
        {props.children}
        <Footer />
    </div>
);

export default Navbar;
