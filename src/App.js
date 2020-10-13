import React, { Fragment, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AnimeState from '../src/context/anime/AnimeState';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Animes from './components/animes/Animes';
import Anime from './components/anime/Anime';
import Search from './components/animes/Search';
import About from './components/pages/About';
import axios from 'axios';

import './App.css';

const App = () => {

  /* Constants */
  const API_BASE_URL = 'https://kitsu.io/api/edge/anime';

  /* State */
  const 
    [animes, setAnimes] = useState([]),
    [anime, setAnime] = useState({}),
    [isLoading, setIsLoading] = useState(false),
    [isNoResults, setIsNoResults] = useState(false),
    [alert, setAlert] = useState(null);

  /* Actions */
  

  const getAnime = async (id) => {
    setIsLoading(true);
    const result = await axios.get(`${API_BASE_URL}/${id}`);
    const genres = await axios.get(`${API_BASE_URL}/${id}/genres?fields[genres]=name`);
    result.data.data.attributes.genres = genres.data.data.map(g => g.attributes.name);
    setAnime(result.data.data.attributes);
    setIsLoading(false);
  }

  const clearAnimes = () => {
    setAnimes([]);
    setIsLoading(false);
    setIsNoResults(false);
  }

  const showAlert = (message, severity) => {
    setAlert({message, severity});
    setTimeout(() => setAlert(null), 2000);
  }

  /* Return */
  return (
    <AnimeState>

      <BrowserRouter>
        <div className="App">
          <header className="uk-position-top uk-position-z-index">
            <Navbar />
          </header>
          <main>
            <Alert alert={alert} />
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search 
                    clearAnimes={clearAnimes}
                    isShowClear={animes.length > 0 ? true : false}
                    showAlert={showAlert}
                  />
                  <Animes />
                </Fragment>
              )} />
              <Route exact path="/about" component={About} />
              <Route exact path="/anime/:id" render={props => (
                <Anime 
                  {...props} 
                  getAnime={getAnime}
                  anime={anime}
                  isLoading={isLoading}
                />
              )} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    </AnimeState>
  );
  
}

export default App;
