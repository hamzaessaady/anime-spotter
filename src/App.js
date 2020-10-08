import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import AnimeItem from './components/animes/AnimeItem';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="uk-section-primary uk-preserve-color">
          <Navbar />
        </header>
        <main>
          <AnimeItem />
        </main>
      </div>
    );
  }
}

export default App;
