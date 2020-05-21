import React from 'react';
import './card.styles.css';
import Tarot from '../../images/ten-of-swords.webp';

export const Card = (props) => (
  <div className="card-container">
    <img alt="Tarot" src={Tarot} width="180" />
    <br></br>

    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front"></div>
        <div className="flip-card-back">
          <h2> {props.prompt.idea}</h2>
          <p>Category: {props.prompt.category}</p>
          <p>Tarot: {props.prompt.label}</p>
          <h4>Playwright: {props.prompt.playwright}</h4>
        </div>
      </div>
    </div>
  </div>
);
