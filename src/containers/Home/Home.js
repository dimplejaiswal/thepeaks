import React, { useEffect, useState } from 'react';
import Loader from 'ui/Loader/Loader';
import { Link } from 'react-router-dom';
import valueAt from '../../util/valueAt';
import CardWrapper from '../../components/CardWrapper/CardWrapper';
import BookmarkButton from '../../components/BookmarkButton/BookmarkButton';
import TopStoriesWrapper from '../../components/TopStoriesWrapper/TopStoriesWrapper';
import http from '../../lib/http/http';
import './home.scss';
import Dropdown from '../../ui/Dropdown/dropDown';

const getSearchApi = (section, pageSize = 8) =>
    http.get('/search', {
        params: {
            section,
            page: 1,
            'page-size': pageSize,
            'show-fields': 'headline,trailText,thumbnail',
        },
    });

const Home = () => {
    const [topStories, setTopStories] = useState([]);
    const [sportStories, setSportsStories] = useState([]);
    useEffect(() => {
        Promise.all([
            getSearchApi().then((response) =>
                setTopStories(valueAt(response, 'data.response.results', []))
            ),
            getSearchApi('sport', 3).then((response) =>
                setSportsStories(valueAt(response, 'data.response.results', []))
            ),
        ]);
    }, [setTopStories, setSportsStories]);

    if (!topStories.length) {
        return <Loader />;
    }

    return (
        <div className="home">
            <div className="top-section">
                <h1 className="heading"> Top Stories </h1>
                <Link to="/bookmark">
                    <BookmarkButton text="VIEW BOOKMARK" />
                </Link>
                <Dropdown />
            </div>
            <TopStoriesWrapper data={topStories} />
            <h1 className="heading"> Sport </h1>
            <CardWrapper results={sportStories} />
        </div>
    );
};

export default Home;
