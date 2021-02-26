import React, { useEffect, useState } from 'react';
import Loader from 'ui/Loader/Loader';
import { Link } from 'react-router-dom';
import valueAt from '../../util/valueAt';
import CardWrapper from '../../components/CardWrapper/CardWrapper';
import BookmarkButton from '../../components/BookmarkButton/BookmarkButton';
import TopStoriesWrapper from '../../components/TopStoriesWrapper/TopStoriesWrapper';
import { OrderBy, data } from '../../components/OrderBy/OrderBy';
import http from '../../lib/http/http';
import './home.scss';

const getSearchApi = (section, pageSize = 8, orderBy = data[0].value) =>
    http.get('/search', {
        params: {
            section,
            page: 1,
            'page-size': pageSize,
            'show-fields': 'headline,trailText,thumbnail',
            'order-by': orderBy,
        },
    });

const Home = () => {
    const [topStories, setTopStories] = useState([]);
    const [sportStories, setSportsStories] = useState([]);

    const initialLoad = (orderBy) =>
        Promise.all([
            getSearchApi('news', 8, orderBy).then((response) =>
                setTopStories(valueAt(response, 'data.response.results', []))
            ),
            getSearchApi('sport', 3, orderBy).then((response) =>
                setSportsStories(valueAt(response, 'data.response.results', []))
            ),
        ]);
    useEffect(() => initialLoad(), [setTopStories, setSportsStories]);

    if (!topStories.length) {
        return <Loader />;
    }

    const onDropdownClicked = (value) => initialLoad(value);

    return (
        <div className="home">
            <div className="top-section">
                <h1 className="heading"> Top Stories </h1>
                <div className="right">
                    <Link className="link" to="/bookmark">
                        <BookmarkButton text="VIEW BOOKMARK" />
                    </Link>
                    <OrderBy onItemClick={onDropdownClicked} />
                </div>
            </div>
            <TopStoriesWrapper data={topStories} />
            <h1 className="heading"> Sport </h1>
            <CardWrapper results={sportStories} />
        </div>
    );
};

export default Home;
