import React from 'react';
import LoaderIcon from '../../../assets/images/loader-peak.gif';
import './loader.scss';

const Loader = () => (
    <div className="loader">
        <span className="loaderIcon">
            <img src={LoaderIcon} alt="Loading..." />
        </span>
    </div>
);

export default Loader;
