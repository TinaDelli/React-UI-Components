import React from 'react';

import CardBanner from './CardBanner';
import CardContent from './CardContent';
import './Card.css';

function CardContainer () {
return (
<div className="card-container">
    <a href= "https://www.reactjs.org" target="_blank" rel="noopener noreferrer">
    <CardBanner />
    <CardContent />
    </a>
</div>
);
}

export default CardContainer;