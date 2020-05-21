import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
// import { CardFlip } from './components/card-flip/card-flip.component';

import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      prompts: [
        {
          idea: 'Poison',
          id: '1',
          category: 'Weapon',
          playwright: 'Pamela',
          label: 'Ten of Swords',
          
        },
        {
          idea: 'Ghoul',
          id: '2',
          category: 'Demon',
          playwright: 'Daphne',
          label: 'Ace of Cups',
        },
        {
          idea: 'Rope',
          id: '3',
          category: 'Weapon',
          playwright: 'Unassigned',
          label: 'Page of Swords',
        },
        {
          idea: 'Tower',
          id: '3',
          category: 'Haunting',
          playwright: 'Unassigned',
          label: 'Two of Coins',
        }
      ],
      
    };
  }

  render() {
    const { prompts } = this.state;
    return (
      <div className="App">
        <h1>Pick-A-Prompt</h1>
        <CardList prompts={prompts}></CardList>
        
      </div>
    );
  }
}

export default App;
