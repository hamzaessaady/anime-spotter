import React, { Fragment } from 'react';
import AnimeItem from './AnimeItem';
import PropTypes from 'prop-types';

const Animes = (props) => { 
  
  return (
    <Fragment>
      <article className="uk-container uk-text-center">
        {props.isLoading && 
          <span className="uk-margin-top" data-uk-spinner="ratio: 3"></span>}
        {props.isNoResults &&
          <div className="uk-placeholder uk-text-center uk-text-italic">
            No anime found
          </div>}
        <div data-uk-grid
          className="uk-grid uk-grid-match uk-child-width-1-3@l uk-child-width-1-2@m uk-text-center">
          {props.animes.map(anime => (
            <AnimeItem key={anime.id} anime={anime} />
          ))}
        </div>
      </article>
    </Fragment>
  )
  
}

// PropTypes
Animes.prototype = {
  isLoading: PropTypes.bool.isRequired,
  isNoResults: PropTypes.bool.isRequired,
  animes: PropTypes.array.isRequired
}

export default Animes;
