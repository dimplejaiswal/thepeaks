import React, { useEffect, useState } from 'react';
import Loader from 'ui/Loader/Loader';
import valueAt from '../../util/valueAt';
import TopStoriesWrapper from '../../components/TopStoriesWrapper/TopStoriesWrapper';
import http from '../../lib/http/http';
import './home.scss';

const Home = () => {
    const [topStories, setTopStories] = useState([]);

    useEffect(() => {
        http.get('/search', {
            params: {
                'show-fields': 'headline,trailText,thumbnail',
                page: 1,
                'page-size': 8,
            },
        })
            .then((response) => {
                setTopStories(valueAt(response, 'data.response.results', []));
            })
            // eslint-disable-next-line no-console
            .catch((e) => console.error(e));
    }, [setTopStories]);

    if (!topStories.length) {
        return <Loader />;
    }
    return (
        <div className="home">
            <TopStoriesWrapper data={topStories} />
        </div>
    );
};

export default Home;
