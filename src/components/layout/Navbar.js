import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from './logo.png';


const Navbar = (props) => {

  return (
    <nav className="uk-navbar-container uk-navbar-transparent uk-light"
      data-uk-navbar="mode: click">
      <div className="uk-navbar-left">
        <Link className="uk-navbar-item uk-logo uk-text-primary" to="/">
          <img src={logo} alt="Logo" width="220px"/>
        </Link>
      </div>
      <div className="uk-navbar-right uk-margin-right">
        <ul className="uk-navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
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
