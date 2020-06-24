import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prompts: [
        {
          id: '0',
          title: 'The Fool',
          upright: 'Innocence, New Beginnings, Free Spirit',
          reversed: 'Recklessness, Taken Advantage Of, Inconsideration',
          imageURL: 'https://tarot-api.s3.amazonaws.com/images/major/1.jpg',
        },
        {
          id: '1',
          title: 'The Magician',
          upright: 'Willpower, Desire, Creation, Manifestation',
          reversed: 'Trickery, Illusions, Out of Touch',
          imageURL: 'https://tarot-api.s3.amazonaws.com/images/major/2.jpg',
        },
        {
          id: '2',
          title: 'The High Priestess',
          upright: 'Intuitive, Unconscious, Inner Voice',
          reversed: 'Lack of Center, Lost Inner Voice, Repressed Feelings',
          imageURL: 'https://tarot-api.s3.amazonaws.com/images/major/3.jpg',
        },
        {
          id: '3',
          title: 'The Empress',
          upright: "Motherhood, Fertility, Nature",
          reversed: "Dependence, Smothering, Emptiness, Nosiness",
          imageURL: 'https://tarot-api.s3.amazonaws.com/images/major/4.jpg',
        },
        {
          id: '4',
          title: 'The Emperor',
          upright: 'Authority, Structure, Control, Fatherhood',
          reversed: 'Tyranny, Rigidity, Coldness',
          imageURL: 'https://tarot-api.s3.amazonaws.com/images/major/5.jpg',
        },
        {
          id: '5',
          title: "The Hierophant",
          upright: "Tradition, Conformity, Morality, Ethics",
          reversed: "Rebellion, Subversiveness, New Approaches",
          imageURL: 'https://tarot-api.s3.amazonaws.com/images/major/6.jpg',
        },
        {
          id: '6',
          title: "The Lovers",
          upright: "Partnerships, Duality, Union",
          reversed: "Loss of Balance, One-Sidedness, Disharmony",
          imageURL: 'https://tarot-api.s3.amazonaws.com/images/major/7.jpg',
        },
        {
          id: '7',
          title: "The Chariot",
          upright: "Direction, Control, Willpower",
          reversed: "Lack of Direction, Lack of Control, Aggression",
          imageURL: 'https://tarot-api.s3.amazonaws.com/images/major/8.jpg',
        },
        {
          id: '8',
          title: "Strength",
          upright: "Inner Strength, Bravery, Compassion, Focus",
          reversed: "Self Doubt, Weakness, Insecurity",
          imageURL: 'https://tarot-api.s3.amazonaws.com/images/major/9.jpg',
        },
        {
          id: '9',
          title: "The Hermit",
          upright: "Contemplation, Search for Truth, Inner Guidance",
          reversed: "Loneliness, Isolation, Lost Your Way",
          imageURL: 'https://tarot-api.s3.amazonaws.com/images/major/10.jpg',
        },
        {
          id: '10',
          title: "Wheel of Fortune",
          upright: "Change, Cycles, Inevitable Fate",
          reversed: "No Control, Clinging to Control, Bad Luck",
          imageURL: 'https://tarot-api.s3.amazonaws.com/images/major/11.jpg',
        },
        {
          id: '11',
          title: "Justice",
          upright: "Cause and Effect, Clarity, Truth",
          reversed: "Dishonesty, Unaccountability, Unfairness",
          imageURL: 'https://tarot-api.s3.amazonaws.com/images/major/12.jpg',
        },
        {
          id: '12',
          title: "The Hanged Man",
          upright: "Sacrifice, Release, Martyrdom",
          reversed: "Stalling, Needless Sacrifice, Fear of Sacrifice",
          imageURL: 'https://tarot-api.s3.amazonaws.com/images/major/13.jpg',
        },
        {
          id: '13',
          title: "Death",
          upright: "End of Cycle, Beginnings, Change, Metamorphosis",
          reversed: "Fear of Change, Holding On, Stagnation, Decay",
          imageURL: 'https://tarot-api.s3.amazonaws.com/images/major/14.jpg',
        },
        {
          id: '14',
          title: "Temperance",
          upright: "Middle Path, Patience, Finding Meaning",
          reversed: "Extremes, Excess, Lack of Balance",
          imageURL: 'https://tarot-api.s3.amazonaws.com/images/major/15.jpg',
        },
        {
          id: '15',
          title: "The Devil",
          upright: "Addiction, Materialism, Playfulness",
          reversed: "Freedom, Release, Restoring Control",
          imageURL: 'https://tarot-api.s3.amazonaws.com/images/major/16.jpg',
        },
        {
          id: '16',
          title: "The Tower",
          upright: "Sudden Upheaval, Broken Pride, Disaster",
          reversed: "Disaster Avoided, Delayed Disaster, Fear of Suffering",
          imageURL: 'https://tarot-api.s3.amazonaws.com/images/major/17.jpg',
        },
        {
          id: '17',
          title: "The Star",
          upright: "Hope, Faith, Rejuvenation",
          reversed: "Faithlessness, Discouragement, Insecurity",
          imageURL: 'https://tarot-api.s3.amazonaws.com/images/major/18.jpg',
        },
        {
          id: '18',
          title: "The Moon",
          upright: "Unconscious, Illusions, Intuition",
          reversed: "Confusion, Fear, Misinterpretation",
          imageURL: 'https://tarot-api.s3.amazonaws.com/images/major/19.jpg',
        },
        {
          id: '19',
          title: "The Sun",
          upright: "Joy, Success, Celebration, Positivity",
          reversed: "Negativity, Depression, Sadness",
          imageURL: 'https://tarot-api.s3.amazonaws.com/images/major/20.jpg',
        },
      ],
    };
  }

  render() {
    const { prompts } = this.state;
    return (
      <div>
        <div className="App">
          <h1>Playing in the Dark</h1>
          <CardList prompts={prompts}></CardList>
        </div>
      </div>
    );
  }
}

export default App;
