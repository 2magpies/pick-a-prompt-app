import React from 'react';
import '../../components/card/card.styles.css';
import Tarot from '../../images/ten-of-swords.webp';

export const TarotImage = (props) => (
    <div className="card-container">
        <img alt="Tarot" src={Tarot} width="180" />
        <br></br>
    </div>
);


// API URL: https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=10