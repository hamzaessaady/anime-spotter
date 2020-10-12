import React, { Fragment } from 'react';

const AnimeAboutInfo = (props) => {
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const {
    startDate,
    endDate,
    ageRating,
    ageRatingGuide,
    episodeCount,
    episodeLength,
    youtubeVideoId,
    showType,
    genres
  } = props.aboutInfo;
  
  return (
    <Fragment>
      <section>
        <div className="uk-section uk-section-muted">
          <div className="uk-container">
            <h2 className="uk-heading-bullet uk-text-primary">About</h2>
            <div className="uk-grid-match uk-child-width-1-2@m" data-uk-grid>
              <div>
                <dl className="uk-description-list uk-padding uk-description-list-divider uk-background-default">
                  <dt>Genres</dt>
                  <dd>{genres?.length > 0 ? genres.join(', ') : <span className="uk-text-italic">not available</span>}</dd>
                  <dt>Date Aired</dt>
                  <dd>
                    {endDate === null && 
                      <span className="uk-text-italic">Since </span>}
                    { (new Date(startDate)).toLocaleDateString("en-GB", dateOptions) } 
                    {endDate !== null && 
                      <span className="uk-text-italic"> to </span>}
                    {endDate !== null && 
                      (new Date(endDate)).toLocaleDateString("en-GB", dateOptions) }
                  </dd>
                  <dt>Episodes</dt>
                  <dd>
                    {episodeCount !== null ? 
                      <span>{`${episodeCount} episode(s)`} </span> : <span>Airing </span> } 
                    <span>{`(${episodeLength} min/ep)`}</span>
                  </dd>
                </dl>
              </div>
              <div>
                <dl className="uk-description-list uk-padding uk-description-list-divider uk-background-default">
                  <dt>Show Type</dt>
                  <dd>{showType}</dd>
                  <dt>Age Rating</dt>
                  <dd>{ageRatingGuide} {`(${ageRating})`}</dd>
                  <dt>Trailer</dt>
                  <dd>
                    {youtubeVideoId !== null ?
                      <a href={`https://www.youtube.com/watch?v=${youtubeVideoId?.split('/').pop()}`}
                        uk-icon="icon: youtube"> </a>
                      : <span className="uk-text-italic">not available</span>
                    }
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

      </section>
    </Fragment>
  )
}

export default AnimeAboutInfo;
