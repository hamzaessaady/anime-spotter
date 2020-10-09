import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Animes from './components/animes/Animes';
import Search from './components/animes/Search';
import axios from 'axios';

import './App.css';

class App extends Component {

  API_BASE_URL = 'https://kitsu.io/api/edge/anime';

  // State
  state = {
    animes: [],
    isLoading: false,
    isNoResults: false
  }

  // SearchAnimes
  searchAnimes = async (keyword) => {
    this.setState({ isLoading: true });
    const result = await axios.get(`${this.API_BASE_URL}?filter[text]=${keyword}`);
    this.setState({
      animes: result.data.data,
      isLoading: false,
      isNoResults: result.data.data.length === 0 ? true : false
    });
    window.scrollTo(0, 200);
  }

  // Clear animes state
  clearAnimes = () => {
    this.setState({
      animes: [],
      isLoading: false,
      isNoResults: false
    });
  }

  // Render
  render() {
    return (
      <div className="App">
        <header className="uk-section-primary uk-preserve-color">
          <Navbar />
        </header>
        <main>
          <Search 
            searchAnimes={this.searchAnimes}
            clearAnimes={this.clearAnimes}
            isShowClear={this.state.animes.length > 0 ? true : false}
          />
          <Animes
            isLoading={this.state.isLoading} 
            isNoResults={this.state.isNoResults}
            animes={this.state.animes}
          />
        </main>
      </div>
    );
  }
}

export default App;
