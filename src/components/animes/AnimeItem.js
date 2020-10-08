import React, { Component, Fragment } from 'react'

class AnimeItem extends Component {

  // Render
  render() {
    const { posterImage, status, title, synopsis } = this.props.anime;

    return (
      <Fragment>
        <div>
          <div className="uk-card uk-card-small uk-card-hover uk-card-default uk-grid-collapse uk-margin uk-grid-match" data-uk-grid>
            <div className="uk-card-media-left uk-cover-container uk-width-1-4">
              <img src={posterImage} alt="Poster Image" data-uk-cover />
              <canvas width={600} height={400} />
            </div>
            <div className="uk-width-expand">
              <div className="uk-card-body">
                <div className="uk-card-badge uk-label" style={{top:'10px', right:0}}>{status}</div>
                <h3 className="uk-card-title uk-margin-top">{title}</h3>
                <p className="">{`${synopsis.substring(0, 150)}...`}</p>
                
              </div>
              <div style={{border:'none'}}
                className="uk-card-footer uk-padding-remove uk-flex uk-flex-bottom">
                <button className="uk-button uk-button-primary uk-button-small uk-width-1-1">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default AnimeItem;
