import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import AnimeCover from '../anime/AnimeCover';
import AnimeBasicInfo from '../anime/AnimeBasicInfo';
import AnimeAboutInfo from '../anime/AnimeAboutInfo';

const Anime = ({ getAnime, anime, isLoading, match }) => {

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

Anime.prototypes = {
  getAnime: PropTypes.func.isRequired,
  anime: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default Anime;
