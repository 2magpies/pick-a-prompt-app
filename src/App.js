import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';


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
          assigned: true,
          
        },
        {
          idea: 'Ghoul',
          id: '2',
          category: 'Demon',
          playwright: 'Daphne',
          label: 'Ace of Cups',
          assigned: true,
        },
        {
          idea: 'Rope',
          id: '3',
          category: 'Weapon',
          playwright: 'Unassigned',
          label: 'Page of Swords',
          assigned: false,
        },
        {
          idea: 'Tower',
          id: '3',
          category: 'Haunting',
          playwright: 'Unassigned',
          label: 'Two of Coins',
          assigned: false,
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
