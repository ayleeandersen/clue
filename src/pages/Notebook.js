import React from 'react';
import { Checkbox } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';

import ClueCard from '../components/ClueCard';

import { SUSPECTS, WEAPONS, LOCATIONS } from '../utils/constants';

class Notecard extends React.Component {
  state = {
    showDiscoveredClues: false,
  };

  toggleShowDiscoveredClues = () => {
    this.setState(prevState => ({
      showDiscoveredClues: !prevState.showDiscoveredClues,
    }))
  }

  getClues = () => JSON.parse(localStorage.getItem('discoveredClues')) || [];

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
                disabled
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
                disabled
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
                disabled
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