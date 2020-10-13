import React, { Fragment } from 'react';
import http404 from './http404.png';

const NotFound = () => (
  <Fragment>
    <article uk-height-viewport="expand: true"
      className="uk-section uk-text-center uk-flex uk-flex-middle uk-flex-center">
      <div className="uk-overlay uk-overlay-primary uk-position-top uk-padding"></div>
      <img className="uk-margin-top" src={http404} alt="404 Error" width="50%"/>
    </article>
  </Fragment>
)

export default NotFound;