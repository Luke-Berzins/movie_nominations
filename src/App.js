import React, { useState } from 'react'
import './App.css';
import Search from './components/Search'
import NominationList from './components/NominationList'

function App() {
  const [nominationList, setNominationList] = useState({
    a: "s",
    b: "s",
    c: "s",
    d: "s",
    e: "s",
  })



  return (
    <div className="App">
      <h1>🎥 The Shoppies 🎥</h1>
      <Search 
      setNominationList={setNominationList}
      nominationList={nominationList}
      />
      <NominationList 
      nominationList={nominationList}
      />
    </div>
  );
}

export default App;
