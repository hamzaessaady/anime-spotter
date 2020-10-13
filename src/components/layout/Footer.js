import React, { Fragment, useContext } from 'react';
import logoFooter from './logo.png';
import AnimeContext from '../../context/anime/animeContext';

const Footer = () => {

  // Context
  const animeContext = useContext(AnimeContext);
  const { isShowFooter } = animeContext;

  return (
    <Fragment>
      {isShowFooter &&
        <footer className="uk-background-secondary">
          <div className="uk-text-center uk-padding-small">
            <div>
              <span data-uk-totop data-uk-scroll></span>
            </div>
            <img src={logoFooter} alt="Brand logo" width="200px"/>
            <div>
              <span className="uk-text-meta" style={{fontSize: '0.7rem'}}>
                &copy; 2020
              </span>
            </div>
          </div>
        </footer>
      }
      
    </Fragment>
  )
}

export default Footer;
