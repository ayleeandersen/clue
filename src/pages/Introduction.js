import React from 'react';

class Introduction extends React.Component {
  componentWillMount() {
    localStorage.setItem('visitedIntro', JSON.stringify(true));
  }

  render() {
    return (
      <div className='body introduction'>
        <p>Welcome to Clue - Book of Mormon Edition!</p>
        <p>Each puzzle you solve throughout the course of the activity will give you a secret code. Use the "Enter Code" tab to get the corresponding clues from that puzzle. When you get a clue, remember to add the info to the "Notebook" tab. The more puzzles you solve, the closer you'll be to catching the criminal!</p>
        <p>Good luck!</p>
      </div>
    );
  }
}

export default Introduction