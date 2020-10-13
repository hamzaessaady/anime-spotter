import React, { Fragment } from 'react';
import Search from '../animes/Search';
import Animes from '../animes/Animes';

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Animes />
    </Fragment>
  )
}

export default Home;
