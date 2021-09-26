import React from 'react';
import './App.css';
import { Root } from './components/Root';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div className="header"> */}
          <span className="title">Birds!</span>
        {/* </div> */}
      </header>
      <Root />
    </div>
  );
}

export default App;
