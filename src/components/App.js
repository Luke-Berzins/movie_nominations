import React, { useState } from 'react'
import './styles/App.css';
import SearchDisplay from './SearchDisplay'
import NominationDisplay from './NominationDisplay'

function App() {
  const [nominationList, setNominationList] = useState({})



  return (
    <div className="App">
      <h1 className="pageTitle">🎥 The Shoppies 🎥</h1>
      {Object.keys(nominationList).length === 5 && 
        <span className="banner">Thank you for your selections!</span>}
        <SearchDisplay 
        nominationList={nominationList}
        setNominationList={setNominationList}
        />
        <NominationDisplay
        nominationList={nominationList}
        setNominationList={setNominationList}
        />
    </div>
  );
}

export default App;
