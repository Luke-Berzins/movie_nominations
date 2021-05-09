import React, { useState } from 'react'
import './App.css';
import Search from './Search'
import NominationDisplay from './NominationDisplay'

function App() {
  const [nominationList, setNominationList] = useState({})



  return (
    <div className="App">
      <h1>🎥 The Shoppies 🎥</h1>
      <Search 
      setNominationList={setNominationList}
      nominationList={nominationList}
      />
      <NominationDisplay
      nominationList={nominationList}
      setNominationList={setNominationList}
      />
    </div>
  );
}

export default App;
