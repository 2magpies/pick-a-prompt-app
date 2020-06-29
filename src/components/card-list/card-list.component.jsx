import React from 'react';
import { Card } from './../card/card.component';

import './card-list.styles.css';

export const CardList = (props) => (
  
<div className="card-list">
    {props.prompts.map((prompt) => (
      <Card key={prompt.id} prompt={prompt} />
    ))}
  </div >
);

