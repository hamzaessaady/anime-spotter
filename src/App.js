import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Animes from './components/animes/Animes';
import axios from 'axios';

import './App.css';

class App extends Component {

  // State
  state = {
    animes: [],
    isLoading: false
  }

  // OnInit
  async componentDidMount(){
    this.setState({ isLoading: true });
    const result = await axios.get('https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=0');
    this.setState({animes: result.data.data, isLoading: false});
  }

  // Render
  render() {
    return (
      <div className="App">
        <header className="uk-section-primary uk-preserve-color">
          <Navbar />
        </header>
        <main>
          <Animes
            isLoading={this.state.isLoading} 
            animes={this.state.animes} 
          />
        </main>
      </div>
    );
  }
}

export default App;
