import React from 'react';
import Card from '../Card/Card';
import './topStoriesWrapper.scss';

const TopStoriesWrapper = ({ data }) => {
    const initialCards = data.splice(0, 5);
    return (
        <div className="top-stories">
            <h1 className="heading"> Top Stories </h1>
            <div className="news-cards">
                <div className="left">
                    <Card data={initialCards[0]} />
                </div>
                <div className="right">
                    <div className="col card1">
                        <div className="card right-card">
                            <img
                                className="card-img"
                                src={initialCards[1].fields.thumbnail}
                                alt="Card Img"
                            />
                            <div className="card-text">
                                <h2 className="headlind">{initialCards[1].webTitle}</h2>
                            </div>
                        </div>
                        <div className="card-text">
                            <h2 className="headlind">{initialCards[2].webTitle}</h2>
                        </div>
                    </div>
                    <div className="col card1">
                        <div className="card right-card">
                            <img
                                className="card-img"
                                src={initialCards[3].fields.thumbnail}
                                alt="Card Img"
                            />
                            <div className="card-text">
                                <h2 className="headlind">{initialCards[3].webTitle}</h2>
                            </div>
                        </div>
                        <div className="card-text">
                            <h2 className="headlind">{initialCards[4].webTitle}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                {data.map((cardData) => (
                    <Card data={cardData} />
                ))}
            </div>
        </div>
    );
};

export default TopStoriesWrapper;
