import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Navbar extends Component {

  // Props
  static defaultProps = {
    logoTitle: 'Anime Spotter'
  }
  // PropTypes
  static propTypes = {
    logoTitle: PropTypes.string.isRequired
  }

  render() {
    return (
      <nav className="uk-navbar-container uk-navbar-transparent uk-light" data-uk-navbar="mode: click">
        <div className="uk-navbar-left">
          <a className="uk-navbar-item uk-logo" href="#">
            {this.props.logoTitle}
          </a>
        </div>
      </nav>
    )
  }
}

export default Navbar
