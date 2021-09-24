import React from 'react';
import { useRoute } from 'react-router5';
import logo from './logo.svg';
import './App.scss';

function App() {

    const { route } = useRoute();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Coming soon ... {route.name}
        </p>
      </header>
    </div>
  );
}

export default App;
