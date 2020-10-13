import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AnimeState from '../src/context/anime/AnimeState';
import AlertState from '../src/context/alert/AlertState';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Footer from './components/layout/Footer';
import Animes from './components/animes/Animes';
import Anime from './components/anime/Anime';
import Search from './components/animes/Search';
import About from './components/pages/About';

import './App.css';

const App = () => {

  return (
    <AnimeState>
      <AlertState>
        <BrowserRouter>
          <div className="App">
            <header className="uk-position-top uk-position-z-index">
              <Navbar />
            </header>
            <main>
              <Alert />
              <Switch>
                <Route exact path="/" render={ () => (
                  <Fragment>
                    <Search />
                    <Animes />
                  </Fragment>
                )} />
                <Route exact path="/about" component={About} />
                <Route exact path="/anime/:id" component={Anime} />
              </Switch>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </AlertState>
    </AnimeState>
  );
  
}

export default App;