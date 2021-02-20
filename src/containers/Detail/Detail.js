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
                'show-fields': 'headline,body',
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
        <div>
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
