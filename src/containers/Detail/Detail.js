/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react';
import Loader from 'ui/Loader/Loader';
import valueAt from 'util/valueAt';
import http from '../../lib/http/http';

const Detail = ({ id }) => {
    const [story, setStory] = useState(null);

    useEffect(() => {
        http.get(`/${id}`, {
            params: {
                'show-fields': 'trailText,main,body',
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
        fields: { trailText, main, body },
        webPublicationDate,
    } = story;
    return (
        <div>
            <div className="left">
                <p>{webPublicationDate}</p>
                <p>{webTitle}</p>
                <div dangerouslySetInnerHTML={{ __html: trailText }} />
                <div dangerouslySetInnerHTML={{ __html: body }} />
            </div>
            <div className="right">
                <div dangerouslySetInnerHTML={{ __html: main }} />
            </div>
        </div>
    );
};

export default Detail;
