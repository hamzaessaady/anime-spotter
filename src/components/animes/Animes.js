import React, { Fragment, useContext } from 'react';
import AnimeContext from '../../context/anime/animeContext';
import AnimeItem from './AnimeItem';

const Animes = () => { 

  // Context
  const animeContext = useContext(AnimeContext);
  const { 
    animes,
    isLoading,
    isNoResults 
  } = animeContext;
  
  return (
    <Fragment>
      <article className="uk-container uk-text-center">
        {isLoading && 
          <span className="uk-margin-top" data-uk-spinner="ratio: 3"></span>}
        {isNoResults &&
          <div className="uk-placeholder uk-text-center uk-text-italic">
            No anime found
          </div>}
        <div data-uk-grid
          className="uk-grid uk-grid-match uk-child-width-1-3@l uk-child-width-1-2@m uk-text-center">
          {animes.map(anime => (
            <AnimeItem key={anime.id} anime={anime} />
          ))}
        </div>
      </article>
    </Fragment>
  )
  
}

export default Animes;
