import React from 'react';

import { TABS } from '../utils/constants';
import logo from '../logo.png';

class Header extends React.Component {
  render() {
    return <div className='header'>
      <img src={logo} className='logo' />
      <div className='tabs'>
        {TABS.map(tab => (
          <div
            className={`tab ${tab.id === this.props.active ? 'active' : ''}`}
            key={tab.id}
            onClick={() => this.props.clickTab(tab.id)}
          >
            {tab.name}
          </div>
        ))}
      </div>
    </div>;
  }
}

export default Header