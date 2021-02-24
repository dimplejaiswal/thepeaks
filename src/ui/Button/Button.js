import React from 'react';

import './button.scss';

const getVariantClass = (variant) => {
    switch (variant) {
        case 'icon':
            return 'button-icon';
        default:
            return '';
    }
};

const Button = ({ Icon, handleOnClick, text, alt, variant }) => (
    <button
        className={`btn ${getVariantClass(variant)}`}
        type="button"
        onClick={handleOnClick}
    >
        {variant === 'icon' && <img className="icon" src={Icon} alt={alt} />}
        <span>{text}</span>
    </button>
);

export default Button;
