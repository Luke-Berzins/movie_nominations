import React, { useState } from 'react'
import './styles/App.css';
import SearchDisplay from './SearchDisplay'
import NominationDisplay from './NominationDisplay'

function App() {
  const [nominationList, setNominationList] = useState({})



  return (
    <div className="App">
      <h1 className="App__h1">🎥 The Shoppies 🎥</h1>
      {Object.keys(nominationList).length === 5 && 
        <span className="App__span">Thank you for your selections! 5 is the maximum.</span>}
        <div className="AppLists">
          <SearchDisplay 
          nominationList={nominationList}
          setNominationList={setNominationList}
          />
          <NominationDisplay
          nominationList={nominationList}
          setNominationList={setNominationList}
          />
        </div>
    </div>
  );
}

export default App;
