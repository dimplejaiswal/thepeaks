import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import valueAt from '../../util/valueAt';
import CardWrapper from '../CardWrapper/CardWrapper';
import './topStoriesWrapper.scss';

const TopStoriesWrapper = ({ data }) => {
    const initialCards = data.slice(0, 5);
    return (
        <div className="top-stories">
            <div className="news-cards">
                <div className="left">
                    <Card data={initialCards[0]} />
                </div>
                <div className="right">
                    <div className="col card-1">
                        <Link to={`/detail/${initialCards[1].id}`} className="link">
                            <div className="card right-card">
                                <img
                                    className="card-img"
                                    src={valueAt(
                                        initialCards[1],
                                        'fields.thumbnail',
                                        ''
                                    )}
                                    alt="Card Img"
                                />
                                <div className="card-text">
                                    <h2 className="headline">
                                        {initialCards[1].webTitle}
                                    </h2>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/detail/${initialCards[2].id}`} className="link">
                            <div className="card-text">
                                <h2 className="headline">{initialCards[2].webTitle}</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="col card-2">
                        <Link to={`/detail/${initialCards[3].id}`} className="link">
                            <div className="card right-card">
                                <img
                                    className="card-img"
                                    src={initialCards[3].fields.thumbnail}
                                    alt="Card Img"
                                />
                                <div className="card-text">
                                    <h2 className="headline">
                                        {initialCards[3].webTitle}
                                    </h2>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/detail/${initialCards[4].id}`} className="link">
                            <div className="card-text">
                                <h2 className="headline">{initialCards[4].webTitle}</h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <CardWrapper results={data.slice(5)} />
            </div>
        </div>
    );
};

export default TopStoriesWrapper;
