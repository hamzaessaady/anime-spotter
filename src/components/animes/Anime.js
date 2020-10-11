import React, { Component, Fragment } from 'react'

class Anime extends Component {

  componentDidMount() {
    this.props.getAnime(this.props.match.params.id);
  }

  render() {
    const {
      synopsis, 
      titles, 
      averageRating, 
      posterImage,
      coverImage,
      status
    } = this.props.anime.attributes;
    
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
            <div className="" data-uk-grid >
              <div className="uk-text-center uk-width-1-4"
                style={{marginTop: '-130px'}}>
                <img className="uk-box-shadow-medium" alt="Poster anime"
                  src={posterImage?.medium} width="90%" />
                <div className={`uk-label uk-width-3-4 uk-border-pill
                  ${status==='finished' && 'uk-label-success'} 
                  ${status==='current' && 'uk-label-warning'}`} >
                  {status}
                </div>
              </div>
              <div className="uk-text-left uk-width-3-4">
                <h1 className="uk-margin-remove-bottom">
                  {titles?.en_jp}
                </h1>
                <h3 className="uk-margin-remove-top">{titles?.ja_jp}</h3>
                {synopsis?.split('\n').map(paragraph => (
                  <p>{paragraph}</p>
                ))}

              </div>
            </div>
          </section>

          <section>

          </section>
        </article>
      </Fragment>
    )
    
  }
}

export default Anime;
