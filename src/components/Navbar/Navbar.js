import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Navbar = (props) => (
    <div>
        <Header />
        {props.children}
        <Footer />
    </div>
);

export default Navbar;
