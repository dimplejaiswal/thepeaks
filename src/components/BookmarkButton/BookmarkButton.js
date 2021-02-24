import React from 'react';
import Button from 'ui/Button/Button';
import Icon from '../../../assets/images/bookmarkon-icon.svg';

const BookmarkButton = ({ text, handleOnClick }) => (
    <Button
        Icon={Icon}
        text={text}
        alt={text}
        handleOnClick={handleOnClick}
        variant="icon"
    />
);

export default BookmarkButton;
