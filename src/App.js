import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Animes from './components/animes/Animes';
import Anime from './components/animes/Anime';
import Search from './components/animes/Search';
import About from './components/pages/About';
import axios from 'axios';

import './App.css';

class App extends Component {

  API_BASE_URL = 'https://kitsu.io/api/edge/anime';

  // State
  state = {
    animes: [],
    anime: {
      attributes: {
        
        
      }
    },
    isLoading: false,
    isNoResults: false,
    alert: null
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

  // Get anime data
  getAnime = async (id) => {
    this.setState({ isLoading: true });
    const result = await axios.get(`${this.API_BASE_URL}/${id}`);
    this.setState({
      anime: result.data.data,
      isLoading: false
    });
  }

  // Clear animes state
  clearAnimes = () => {
    this.setState({
      animes: [],
      isLoading: false,
      isNoResults: false
    });
  }

  // Show Alert
  showAlert = (message, sevirity) => {
    this.setState({ alert: {message, sevirity}});
    setTimeout(() => this.setState({alert: null}), 2000)
  }

  // Render
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="uk-position-top uk-position-z-index">
            <Navbar />
          </header>
          <main>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search 
                    searchAnimes={this.searchAnimes}
                    clearAnimes={this.clearAnimes}
                    isShowClear={this.state.animes.length > 0 ? true : false}
                    showAlert={this.showAlert}
                  />
                  <Animes
                    isLoading={this.state.isLoading} 
                    isNoResults={this.state.isNoResults}
                    animes={this.state.animes}
                  />
                </Fragment>
              )} />
              <Route exact path="/about" component={About} />
              <Route exact path="/anime/:id" render={props => (
                <Anime 
                  {...props} 
                  getAnime={this.getAnime}
                  anime={this.state.anime}
                  isLoading={this.state.isLoading}
                />
              )} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
