import React, { Fragment, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AnimeState from '../src/context/anime/AnimeState';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Animes from './components/animes/Animes';
import Anime from './components/anime/Anime';
import Search from './components/animes/Search';
import About from './components/pages/About';

import './App.css';

const App = () => {

  /* State */
  const [alert, setAlert] = useState(null);

  /* Actions */
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
              <Route exact path="/" render={ () => (
                <Fragment>
                  <Search 
                    showAlert={showAlert}
                  />
                  <Animes />
                </Fragment>
              )} />
              <Route exact path="/about" component={About} />
              <Route exact path="/anime/:id" component={Anime} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    </AnimeState>
  );
  
}

export default App;