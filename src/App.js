import React, { useState } from 'react';

import Header from './components/Header';
import Introduction from './pages/Introduction';
import EnterCode from './pages/EnterCode';
import Notebook from './pages/Notebook';

import { TABS } from './utils/constants';

import './App.css';

function App() {
  const visitedIntro = JSON.parse(localStorage.getItem('visitedIntro'));

  const [tab, setTab] = useState(visitedIntro ? TABS[0].id : '');

  const clickTab = id => {
    setTab(id)
  }

  return (
    <div className="App">
      <Header active={tab} clickTab={clickTab} />
      {visitedIntro ? (
        <>
          {tab === TABS[0].id && <EnterCode />}
          {tab === TABS[1].id && <Notebook />}
        </>
      ) : (
          <Introduction />
        )}
    </div>
  );
}

export default App;
