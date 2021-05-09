import React, { useState } from 'react'
import './styles/App.css';
import Search from './SearchDisplay'
import NominationDisplay from './NominationDisplay'

function App() {
  const [nominationList, setNominationList] = useState({})



  return (
    <div className="App">
      <h1>🎥 The Shoppies 🎥</h1>
      <div className="temp">
        <Search 
        setNominationList={setNominationList}
        nominationList={nominationList}
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
