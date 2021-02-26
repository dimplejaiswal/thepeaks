import React, { useState, useEffect } from 'react';
import './notifier.scss';

const Notifier = (props) => {
    const { modifier, Icon, alt, text, show } = props;
    const [showNotifier, setShowNotifier] = useState(false);
    useEffect(() => {
        if (show) {
            setShowNotifier(true);
            setTimeout(() => {
                setShowNotifier(false);
            }, 3000);
        }
    }, [modifier, Icon, alt, text, show]);
    return (
        <div className={`notifier ${showNotifier ? 'show' : 'hide'}`}>
            <p className={`text ${modifier}-bm`}>
                <img className="icon" src={Icon} alt={alt} />
                <span>{text}</span>
            </p>
        </div>
    );
};

export default Notifier;
