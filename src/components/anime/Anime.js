import React, { Component, Fragment } from 'react';
import AnimeCover from '../anime/AnimeCover';
import AnimeBasicInfo from '../anime/AnimeBasicInfo';
import AnimeAboutInfo from '../anime/AnimeAboutInfo';

class Anime extends Component {

  componentDidMount() {
    this.props.getAnime(this.props.match.params.id);
  }

  render() {
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
    } = this.props.anime;

    return this.props.isLoading ? (
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
}

export default Anime;
