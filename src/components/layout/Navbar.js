import React from 'react';
import PropTypes from 'prop-types';


const Navbar = (props) => {

  return (
    <nav className="uk-navbar-container uk-navbar-transparent uk-light"
      data-uk-navbar="mode: click">
      <div className="uk-navbar-left">
        <a className="uk-navbar-item uk-logo" href="#">
          {props.logoTitle}
        </a>
      </div>
    </nav>
  )
  
}

// Props
Navbar.defaultProps = {
  logoTitle: 'Anime Spotter'
}
// PropTypes
Navbar.propTypes = {
  logoTitle: PropTypes.string.isRequired
}

export default Navbar;
