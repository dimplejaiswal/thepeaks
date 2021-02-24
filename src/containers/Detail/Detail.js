/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react';
import Loader from 'ui/Loader/Loader';
import valueAt from 'util/valueAt';
import { setBookMarkItem, removeBookMarkItem, checkBookMarkItem } from 'util/bookmark';
import BookMarkButton from '../../components/BookmarkButton/BookmarkButton';
import http from '../../lib/http/http';
import './detail.scss';

const Detail = ({ id }) => {
    const [isBookmarked, setIsBookMarked] = useState(checkBookMarkItem(id));
    const [story, setStory] = useState(null);

    const addBookMark = () => {
        setBookMarkItem({
            webTitle: story.webTitle,
            fields: story.fields,
            id: story.id,
        });
        setIsBookMarked(true);
    };

    const removeBookMark = () => {
        removeBookMarkItem(id);
        setIsBookMarked(false);
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
            <BookMarkButton
                text={isBookmarked ? 'REMOVE BOOKMARK' : 'ADD BOOKMARK'}
                handleOnClick={isBookmarked ? removeBookMark : addBookMark}
            />
            <div className="left">
                <p className="date">{webPublicationDate}</p>
                <p className="title">{webTitle}</p>
                <p className="headline">{headline}</p>
                <div dangerouslySetInnerHTML={{ __html: body }} />
            </div>
        </div>
    );
};

export default Detail;
