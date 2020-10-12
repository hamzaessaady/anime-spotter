import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Anime extends Component {

  componentDidMount() {
    this.props.getAnime(this.props.match.params.id);
  }

  render() {
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const {
      synopsis, 
      titles, 
      averageRating, 
      posterImage,
      coverImage,
      status,
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

          <header className="bg-muted-er ">
            <div className="uk-background-cover uk-height-medium "
              style={{backgroundImage: `url("${coverImage?.large}")`}}>
              <div className="uk-overlay uk-overlay-primary uk-position-top uk-padding">
              </div>
            </div>
          </header>

          <section className="uk-container uk-padding-small">
            <div data-uk-grid >
              <div className="uk-text-center uk-width-1-4"
                style={{marginTop: '-130px'}}>
                <img className="uk-box-shadow-medium" alt="Poster anime"
                  src={posterImage?.medium} width="90%" />
                {averageRating !== null &&
                  <h2 className="uk-text-bold uk-text-center uk-margin-small-top">
                    <span className="uk-text-primary">{averageRating}</span>
                    <span className="uk-text-muted">/100</span>
                  </h2>
                }
                
              </div>
              <div className="uk-text-left uk-width-3-4">
                <Link to="/">
                  <button className="uk-button uk-button-text uk-text-warning uk-text-bold">
                    <span className="uk-text-bold" uk-icon="icon: triangle-left"></span>Back
                  </button>
                </Link>
                <h1 className="uk-margin-remove-vertical">
                  {titles?.en_jp}
                  <span className={`uk-label uk-margin-left
                    ${status==='finished' && 'uk-label-success'} 
                    ${status==='current' && 'uk-label-warning'}`} >
                    {status}
                  </span>
                </h1>
                <h3 className="uk-margin-remove-top">{titles?.ja_jp}</h3>
                {synopsis?.split('\n').map(paragraph => (
                  <p>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>

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
                            uk-icon="icon: youtube"></a>
                          : <span className="uk-text-italic">not available</span>
                        }
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

          </section>
        </article>
      </Fragment>
    )
    
  }
}

export default Anime;
