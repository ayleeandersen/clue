import React, { useState } from 'react';

import Header from './components/Header';
import EnterCode from './pages/EnterCode';
import Notebook from './pages/Notebook';

import { TABS } from './utils/constants';

import './App.css';

function App() {
  const [tab, setTab] = useState(TABS[0].id);

  const clickTab = id => {
    setTab(id)
  }

  return (
    <div className="App">
      <Header active={tab} clickTab={clickTab} />
      {tab === TABS[0].id && <EnterCode />}
      {tab === TABS[1].id && <Notebook />}
    </div>
  );
}

export default App;
