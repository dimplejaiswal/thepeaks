import React, { useEffect, useState, useRef } from 'react';
import Loader from 'ui/Loader/Loader';
import valueAt from 'util/valueAt';
import { data } from '../../components/OrderBy/OrderBy';
import CardWrapper from '../../components/CardWrapper/CardWrapper';
import TopSection from '../../components/TopSection/TopSection';
import http from '../../lib/http/http';

import './searchResult.scss';

const SearchResult = ({ query }) => {
    const [results, setResults] = useState([]);

    // tracking on which page we currently are
    const [page, setPage] = useState(1);
    const [orderBy, setOrderBy] = useState(data[0].value);

    // add loader refrence
    const loader = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '20px',
            threshold: 1.0,
        };
        // initialize IntersectionObserver
        // and attaching to Load More div
        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) {
            observer.observe(loader.current);
        }
    }, []);

    useEffect(() => {
        setPage(1);
        setResults([]);
    }, [query, orderBy]);

    useEffect(() => {
        http.get('/search', {
            params: {
                page,
                q: query,
                'show-fields': 'headline,trailText,thumbnail',
                'page-size': 15,
                'order-by': orderBy,
            },
        })
            .then((response) => {
                setResults([
                    ...results,
                    ...valueAt(response, 'data.response.results', []),
                ]);
            })
            // eslint-disable-next-line no-console
            .catch((e) => console.error(e));
    }, [page, setResults]);

    // here we handle what happens when user scrolls to Load More div
    // in this case we just update page variable
    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setPage((oldPage) => oldPage + 1);
        }
    };

    const handleDropdownClicked = (value) => setOrderBy(value);

    return (
        <div className="search-container">
            <TopSection heading="Search Results" onItemClick={handleDropdownClicked} />
            <CardWrapper results={results} />
            <div className="loading" ref={loader}>
                <Loader />
            </div>
        </div>
    );
};

export default SearchResult;
