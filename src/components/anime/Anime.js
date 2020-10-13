import React, { Fragment, useEffect, useContext } from 'react';
import AnimeContext from '../../context/anime/animeContext';
import AnimeCover from '../anime/AnimeCover';
import AnimeBasicInfo from '../anime/AnimeBasicInfo';
import AnimeAboutInfo from '../anime/AnimeAboutInfo';

const Anime = ({ match }) => {

  // Context
  const animeContext = useContext(AnimeContext);
  const {
    anime,
    isLoading,
    getAnime
  } = animeContext

  // On Init
  useEffect( () => {
    getAnime(match.params.id);
    // eslint-disable-next-line
  }, []);

  // Vars
  const {
    coverImage,
    // Basic Info
    synopsis, 
    titles, 
    averageRating, 
    posterImage,
    status,
    // About Info
    startDate,
    endDate,
    ageRating,
    ageRatingGuide,
    episodeCount,
    episodeLength,
    youtubeVideoId,
    showType,
    genres
  } = anime;

  // Return
  return isLoading ? (
    <Fragment>
      <span className="uk-position-center" data-uk-spinner="ratio: 2.5"></span>
    </Fragment>
  ) : (
    <Fragment>
      <article>

        <AnimeCover coverImage={coverImage} />
        <AnimeBasicInfo basicInfo={{
            synopsis, 
            titles, 
            averageRating, 
            posterImage,
            status
          }} 
        />
        <AnimeAboutInfo aboutInfo={{
            startDate,
            endDate,
            ageRating,
            ageRatingGuide,
            episodeCount,
            episodeLength,
            youtubeVideoId,
            showType,
            genres
          }} 
        />

      </article>
    </Fragment>
  )

}

export default Anime;
