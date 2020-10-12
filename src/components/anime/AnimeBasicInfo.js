import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const AnimeBasicInfo = (props) => {

  const {
    synopsis, 
    titles, 
    averageRating, 
    posterImage,
    status
  } = props.basicInfo;

  
  return (
    <Fragment>
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
              </h2>}
          </div>
          
          <div className="uk-text-left uk-width-3-4">
            {/* Back Link */}
            <Link to="/">
              <button className="uk-button uk-button-text uk-text-warning uk-text-bold">
                <span className="uk-text-bold" uk-icon="icon: triangle-left"></span>
                Back
              </button>
            </Link>
            {/* Titles */}
            <div>
              <h1 className="uk-margin-remove-vertical">
                {titles?.en_jp}
                <span className={`uk-label uk-margin-left
                  ${status==='finished' && 'uk-label-success'} 
                  ${status==='current' && 'uk-label-warning'}`} >
                  {status}
                </span>
              </h1>
              <h3 className="uk-margin-remove-top">{titles?.ja_jp}</h3>
            </div>
            {/* Synopsis */}
            <div>
              {synopsis?.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default AnimeBasicInfo;
