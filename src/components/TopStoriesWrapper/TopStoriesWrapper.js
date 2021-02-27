import React from 'react';
import Card from '../Card/Card';
import CardWrapper from '../CardWrapper/CardWrapper';
import './topStoriesWrapper.scss';
import StackedHomeCard from '../StackedHomeCard/StackedHomeCard';

const getStackedCards = (cards) => {
    const stackedCards = [];

    for (let i = 0; i < cards.length; i += 2) {
        stackedCards.push(
            <StackedHomeCard
                cards={cards.slice(i, i + 2)}
                modifier={`card-${stackedCards.length + 1}`}
                key={`card-${stackedCards.length + 1}`}
            />
        );
    }

    return stackedCards;
};

const TopStoriesWrapper = ({ data }) => {
    const [firstCard, ...rest] = data.slice(0, 5);
    return (
        <div className="top-stories">
            <div className="news-cards">
                <div className="left">
                    <Card data={firstCard} />
                </div>
                <div className="right">{getStackedCards(rest)}</div>
            </div>
            <div className="bottom">
                <CardWrapper results={data.slice(5)} />
            </div>
        </div>
    );
};

export default TopStoriesWrapper;
