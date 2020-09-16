import React from 'react';

class ClueCard extends React.Component {
  render() {
    const { clues } = this.props;

    return (
      <div className='clue-card'>
        <h1>Clue</h1>
        <h3 className='clue-card-row'>
          <span>Suspect:</span>
          <span className='clue-card-clue'>{clues.person}</span>
        </h3>
        <h3 className='clue-card-row'>
          <span>Weapon:</span>
          <span className='clue-card-clue'>{clues.weapon}</span>
        </h3>
        <h3 className='clue-card-row'>
          <span>Location:</span>
          <span className='clue-card-clue'>{clues.place}</span>
        </h3>
      </div>
    );
  }
}

export default ClueCard