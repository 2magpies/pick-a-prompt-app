import React, { useState } from 'react';
import Dashboard from '../modal/dashboard';
import './card.styles.css';

export const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false)
  console.log(props);
  return (
    <div className="card-container">

      <div className="flip-card" onClick={ () => setIsFlipped(!isFlipped)}>
        <div
          className="flip-card-inner"
          style={isFlipped ? { transform: 'rotateY(180deg)' } : {}}
        >
          <div className="flip-card-front">
            <div>
              <h1>{props.prompt.id}</h1>
            </div>
          </div>
          <div className="flip-card-back">
            <img src={props.prompt.imageURL} width="180" alt={props.prompt.id}/>
            
          </div>
          
        </div>
      </div>
      <br></br>
      
      <Dashboard key={props.prompt.id} prompt={props.prompt}/>
    </div>

  )
  
}
