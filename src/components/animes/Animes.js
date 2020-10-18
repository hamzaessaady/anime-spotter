import React, { Fragment, useContext, useEffect } from 'react';
import debounce from "lodash.debounce";
import AnimeContext from '../../context/anime/animeContext';
import AnimeItem from './AnimeItem';

const Animes = () => {

  useEffect(() => {
    return () => window.onscroll = null;
  }, []);

  // Context
  const animeContext = useContext(AnimeContext);
  const { 
    animes,
    isLoading,
    isNoResults,
    fetchNextPage,
    isFetchingEnd
  } = animeContext;
  
  // Infinite scroll
  window.onscroll =  debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1
      >= document.documentElement.offsetHeight
      && animes.length > 0
    ) {
      fetchNextPage();
    }
  }, 100);

  
  return (
    <Fragment>
      <article className="uk-container uk-text-center">
        {isLoading && 
          <span className="uk-margin-top uk-margin-bottom" data-uk-spinner="ratio: 3"></span>}
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
        {(animes.length>0 && !isFetchingEnd) &&
          <div className="uk-text-center">
            <span className="uk-margin-top uk-margin-bottom" data-uk-spinner="ratio: 1"></span>
          </div>
        }
        {isFetchingEnd &&
          <div className="uk-text-center uk-margin-top uk-margin-bottom uk-text-italic">
            <span>total search result : {animes.length}</span>
          </div>
        }
      </article>
    </Fragment>
  )
  
}

export default Animes;
