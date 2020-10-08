import React, { Component } from 'react'

class AnimeItem extends Component {

  // State
  state = {
    id: '1',
    title: 'Cowboy Bebop',
    synopsis: "In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as \"Cowboys\". The ragtag team aboard the spaceship Bebop are two such individuals.\nMellow and carefree Spike Spiegel is balanced by his boisterous, pragmatic partner Jet Black as the pair makes a living chasing bounties and collecting rewards. Thrown off course by the addition of new members that they meet in their travels—Ein, a genetically engineered, highly intelligent Welsh Corgi; femme fatale Faye Valentine, an enigmatic trickster with memory loss; and the strange computer whiz kid Edward Wong—the crew embarks on thrilling adventures that unravel each member's dark and mysterious past little by little. \nWell-balanced with high density action and light-hearted comedy, Cowboy Bebop is a space Western classic and an homage to the smooth and improvised music it is named after.\n\n(Source: MAL Rewrite)",
    status: "finished",
    posterImage: 'https://media.kitsu.io/anime/poster_images/2/small.jpg?1597604210'
  }

  // Render
  render() {
    const { posterImage, status, title, synopsis } = this.state;

    return (
      <div>
        <div>
          <div className="uk-card uk-card-default uk-grid-collapse uk-margin" data-uk-grid>
            <div className="uk-card-media-left uk-cover-container uk-width-1-4">
              <img src={posterImage} alt="Poster Image" data-uk-cover />
              <canvas width={600} height={400} />
            </div>
            <div className="uk-width-expand">
              <div className="uk-card-body">
                <div class="uk-card-badge uk-label">{status}</div>
                <h3 className="uk-card-title">{title}</h3>
                <p className="">{`${synopsis.substring(0, 150)}...`}</p>
                <button class="uk-button uk-button-secondary uk-button-small">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AnimeItem;
