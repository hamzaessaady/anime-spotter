import React, { Component } from 'react';
import AnimeItem from './AnimeItem';

class Animes extends Component {

  // State
  state = {
    animes: [
      {
        id: '1',
        title: 'Cowboy Bebop',
        synopsis: "In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as \"Cowboys\". The ragtag team aboard the spaceship Bebop are two such individuals.\nMellow and carefree Spike Spiegel is balanced by his boisterous, pragmatic partner Jet Black as the pair makes a living chasing bounties and collecting rewards. Thrown off course by the addition of new members that they meet in their travels—Ein, a genetically engineered, highly intelligent Welsh Corgi; femme fatale Faye Valentine, an enigmatic trickster with memory loss; and the strange computer whiz kid Edward Wong—the crew embarks on thrilling adventures that unravel each member's dark and mysterious past little by little. \nWell-balanced with high density action and light-hearted comedy, Cowboy Bebop is a space Western classic and an homage to the smooth and improvised music it is named after.\n\n(Source: MAL Rewrite)",
        status: "finished",
        posterImage: 'https://media.kitsu.io/anime/poster_images/2/small.jpg?1597604210'
      },
      {
        id: '4',
        title: 'Witch Hunter Robin',
        synopsis: "Witches are individuals with special powers like ESP, telekinesis, mind control, etc. (not the typical hogwart and newt potions). Robin, a 15-year-old craft user, arrives from Italy to Japan to work for an organization named STN Japan Division (STN-J) as a replacement for one of STN-J's witch hunters who was recently killed. Unlike other divisions of STN, STN-J tries to capture the witches alive in order to learn why and how they became witches in the first place.\n(Source: ANN)",
        status: "finished",
        posterImage: "https://media.kitsu.io/anime/poster_images/4/original.jpg?1597698321"
      },
      {
        id: '453',
        title: 'Armitage III: Dual-Matrix',
        synopsis: "A few years after they first met, Naomi Armitage and Ross Syllabus have started a family. Despite their normal lives, they must keep their identities a secret because many people believe that Robots do not deserve equal status with humans. Ross has an opportunity to abolish these ideas on Earth through a vote, but organizations in the shadows are working so that it doesn't happen.\r\n(Source: ANN)",
        status: "finished",
        posterImage: "https://media.kitsu.io/anime/poster_images/453/small.jpg?1408441509"
      }
    ]
  }

  // Render
  render() {
    return (
      <div>
        <article className="uk-container">
          <div data-uk-grid
            className="uk-grid uk-grid-match uk-child-width-1-3@l uk-child-width-1-2@m uk-text-center">
            {this.state.animes.map(anime => (
              <AnimeItem key={anime.id} anime={anime} />
            ))}
          </div>
        </article>
      </div>
    )
  }
}

export default Animes
