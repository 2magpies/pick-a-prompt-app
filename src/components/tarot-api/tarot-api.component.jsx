import React, { useState, useEffect } from 'react';

import './tarot-api.styles.css';

function GetTarot() {
  const [tarot, setTarot] = useState([]);

  useEffect(() => {
    const url = `https://tarot.howlcode.com/api/v1/cards/`;
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setTarot(response);
      })
      .catch(console.error);
  }, []);
//   if (!tarot) {
//     return TarotImage;
//   }
  return (
    <div>
      <h4>Challenge</h4>
      <div className="tarotData">
        {tarot.map((tarot) => (
          <div key={tarot.id}>
            <p>{tarot.id}</p>
            <p>{tarot.name}</p>
            <p>{tarot.reversed}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetTarot;
