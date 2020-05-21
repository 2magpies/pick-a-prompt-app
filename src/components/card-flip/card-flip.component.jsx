import React from 'react';
import { Card } from './../card/card.component';
import '../../components/card-list/card-list.styles.css';
import './card-flip.styles.css';


export const CardFlip = props => (
    // <div className='card-list'>
    //     {props.prompts.map(prompt => (
    //         <Card key={prompt.id} prompt={prompt} />
    //     ))}</div>
    <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
    </div>
                <div className="flip-card-back">
                    <h1>John Doe</h1>
                    <p>Architect Engineer</p>
                    <p>We love that guy</p>
                </div>
            </div>
        </div>
);
