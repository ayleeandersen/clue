import React from 'react';
import { Checkbox } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';

import ClueCard from '../components/ClueCard';

import { SUSPECTS, WEAPONS, LOCATIONS, FREE_CLUES } from '../utils/constants';

class Notecard extends React.Component {
  state = {
    showDiscoveredClues: false,
  };

  componentWillMount() {
    for (const clue in FREE_CLUES) {
      if (!this.isExistingNote(FREE_CLUES[clue])) {
        this.addNoteToLocalStorage(FREE_CLUES[clue]);
      }
    }
  };

  toggleShowDiscoveredClues = () => {
    this.setState(prevState => ({
      showDiscoveredClues: !prevState.showDiscoveredClues,
    }))
  }

  getClues = () => JSON.parse(localStorage.getItem('discoveredClues')) || [];

  addNoteToLocalStorage = note => {
    const existing = JSON.parse(localStorage.getItem('existingNotes')) || [];
    const existingIndex = existing.indexOf(note);
    if (existingIndex === -1) {
      existing.push(note);
    } else {
      existing.splice(existingIndex, 1);
    }
    localStorage.setItem('existingNotes', JSON.stringify(existing));
  };

  isExistingNote = note => (JSON.parse(localStorage.getItem('existingNotes')) || []).includes(note);

  render() {
    const { showDiscoveredClues } = this.state;

    return (
      <div className='body'>
        <div className='notebook-table'>
          <h1>Suspects</h1>
          {SUSPECTS.map(suspect => (
            <div className='row' key={suspect}>
              <span className='table-value'>{suspect}</span>
              <Checkbox
                onChange={() => this.addNoteToLocalStorage(suspect)}
                defaultChecked={this.isExistingNote(suspect)}
              />
            </div>
          ))}
        </div>
        <div className='notebook-table'>
          <h1>Weapons</h1>
          {WEAPONS.map(weapon => (
            <div className='row' key={weapon}>
              <span className='table-value'>{weapon}</span>
              <Checkbox
                onChange={() => this.addNoteToLocalStorage(weapon)}
                defaultChecked={this.isExistingNote(weapon)}
              />
            </div>
          ))}
        </div>
        <div className='notebook-table'>
          <h1>Locations</h1>
          {LOCATIONS.map(location => (
            <div className='row' key={location}>
              <span className='table-value'>{location}</span>
              <Checkbox
                onChange={() => this.addNoteToLocalStorage(location)}
                defaultChecked={this.isExistingNote(location)}
              />
            </div>
          ))}
        </div>
        <div className='link' onClick={this.toggleShowDiscoveredClues}>
          {showDiscoveredClues ? 'Hide' : 'Show'} previously discovered clues
        </div>
        {showDiscoveredClues && this.getClues().map((clues, i) => (
          <ClueCard clues={clues} key={i} />
        ))}
      </div>
    );
  }
}

export default Notecard