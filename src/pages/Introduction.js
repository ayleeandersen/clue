import React from 'react';

import { FREE_CODE, CLUES } from '../utils/constants';
import { addToLocalStorage } from '../utils/helpers';

class Introduction extends React.Component {
  componentDidMount() {
    localStorage.setItem('visitedIntro', JSON.stringify(true));
    addToLocalStorage(CLUES[FREE_CODE]);
  }

  render() {
    return (
      <div className='body introduction'>
        <p>Welcome to Clue - Book of Mormon Edition!</p>
        <p>Each puzzle you solve throughout the course of the activity will give you a secret code. Use the "Enter Code" tab to get the corresponding clues from that puzzle. When you get a clue, it will be added to the "Notebook" tab. The more puzzles you solve, the closer you'll be to catching the criminal!</p>
        <p>Good luck!</p>
      </div>
    );
  }
}

export default Introduction