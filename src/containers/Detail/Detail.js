/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react';
import Loader from 'ui/Loader/Loader';
import valueAt from 'util/valueAt';
import { setBookMarkItem, removeBookMarkItem, checkBookMarkItem } from 'util/bookmark';
import http from '../../lib/http/http';
import BookMarkButton from '../../components/BookmarkButton/BookmarkButton';
import Notifier from '../../ui/Notifier/notifier';
import AddBookMarkIcon from '../../../assets/images/bookmarkon-icon.svg';
import RemoveBookMarkIcon from '../../../assets/images/bookmarkoff-icon.svg';
import './detail.scss';

const Detail = ({ id }) => {
    const [isBookmarked, setIsBookMarked] = useState(checkBookMarkItem(id));
    const [story, setStory] = useState(null);
    const [showNotifier, setShowNotifier] = useState(false);

    const addBookMark = () => {
        setBookMarkItem({
            webTitle: story.webTitle,
            fields: story.fields,
            id: story.id,
        });
        setIsBookMarked(true);
        setShowNotifier(true);
    };

    const removeBookMark = () => {
        removeBookMarkItem(id);
        setIsBookMarked(false);
        setShowNotifier(true);
    };

    useEffect(() => {
        http.get(`/${id}`, {
            params: {
                'show-fields': 'headline,body,thumbnail,trailText',
            },
        })
            .then((response) => {
                setStory(valueAt(response, 'data.response.content', null));
            })
            // eslint-disable-next-line no-console
            .catch((e) => console.error(e));
    }, [setStory]);

    if (!story) {
        return <Loader />;
    }
    const {
        webTitle,
        fields: { headline, body },
        webPublicationDate,
    } = story;
    return (
        <div className="detail-container">
            <Notifier
                show={showNotifier}
                Icon={isBookmarked ? AddBookMarkIcon : RemoveBookMarkIcon}
                alt={isBookmarked ? 'Added' : 'Removed'}
                text={isBookmarked ? 'Saved to Bookmark' : 'Removed from Bookmark'}
                modifier={isBookmarked ? 'add' : 'remove'}
            />
            <BookMarkButton
                text={isBookmarked ? 'REMOVE BOOKMARK' : 'ADD BOOKMARK'}
                handleOnClick={isBookmarked ? removeBookMark : addBookMark}
            />
            <div className="left">
                <p className="date">{webPublicationDate}</p>
                <h1 className="title">{webTitle}</h1>
                <h3 className="headline">{headline}</h3>
                <div dangerouslySetInnerHTML={{ __html: body }} />
            </div>
        </div>
    );
};

export default Detail;
