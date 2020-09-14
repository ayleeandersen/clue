import React, { useState } from 'react';

import Header from './components/Header';
import EnterCode from './pages/EnterCode';
import Notebook from './pages/Notebook';

import './App.css';

function App() {
  const [tab, setTab] = useState('enterCode');

  const clickTab = id => {
    setTab(id)
  }

  return (
    <div className="App">
      <Header active={tab} clickTab={clickTab} />
      {tab === 'enterCode' && <EnterCode />}
      {tab === 'notebook' && <Notebook />}
    </div>
  );
}

export default App;
