import React, { useEffect, useState, useRef } from 'react';
import Loader from 'ui/Loader/Loader';
import valueAt from 'util/valueAt';
import CardWrapper from '../../components/CardWrapper/CardWrapper';
import http from '../../lib/http/http';

import './searchResult.scss';

const SearchResult = ({ query }) => {
    const [results, setResults] = useState([]);

    // tracking on which page we currently are
    const [page, setPage] = useState(1);

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
    }, [query]);

    useEffect(() => {
        http.get('/search', {
            params: {
                page,
                q: query,
                'show-fields': 'headline,trailText,thumbnail',
                'page-size': 15,
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

    return (
        <div className="container">
            <h1 className="heading"> Search Results </h1>
            <CardWrapper results={results} />
            <div className="loading" ref={loader}>
                <Loader />
            </div>
        </div>
    );
};

export default SearchResult;
