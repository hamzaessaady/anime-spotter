import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'



const AnimeItem = (props) => {
  const { titles, status, posterImage, synopsis } = props.anime.attributes;
  const { id } = props.anime;

  return (
    <Fragment>
      <div>
        <div className="uk-card uk-card-small uk-card-hover uk-card-default uk-grid-collapse uk-margin uk-grid-match" data-uk-grid>
          <div className="uk-card-media-left uk-cover-container uk-width-1-4">
            <img src={posterImage.original} alt="Poster" data-uk-cover />
            <canvas width={600} height={400} />
          </div>
          <div className="uk-width-expand">
            <div className="uk-card-body">
              <div style={{top:'10px', right:0}}
              className={`uk-card-badge uk-label 
                ${status==='finished' && 'uk-label-success'} 
                ${status==='current' && 'uk-label-warning'}`} >
                {status}
              </div>
              <h3 className="uk-card-title uk-margin-top">{titles.en_jp}</h3>
              <p className="">{`${synopsis.substring(0, 150)}...`}</p>
            </div>
            <div style={{border:'none'}}
              className="uk-card-footer uk-padding-remove uk-flex uk-flex-bottom">
              <Link to={`anime/${id}`} className="uk-width-1-1">
                <button className="uk-button uk-button-primary uk-button-small uk-width-1-1">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
  
}

// PropTypes
AnimeItem.propTypes = {
  anime: PropTypes.object.isRequired
}

export default AnimeItem;
