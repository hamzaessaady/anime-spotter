import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Animes from './components/animes/Animes';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="uk-section-primary uk-preserve-color">
          <Navbar />
        </header>
        <main>
          <Animes />
        </main>
      </div>
    );
  }
}

export default App;
