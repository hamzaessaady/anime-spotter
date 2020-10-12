import React, { Fragment } from 'react';
import mob from './mob.png';

const About = () => {
  return (
    <Fragment>
      <section className="uk-section">
        <div className="uk-container uk-text-center">
          <h2>About This App</h2>
          <p>
            Find all the anime information data using the
            <a href="https://kitsu.docs.apiary.io/"> Kitsu</a> API.
          </p>
          <div>
            <a href="https://github.com/kuohamkun" className="uk-icon-button uk-margin-small-right" uk-icon="icon: github; ratio: 1.5"> </a>
            <a href="https://instagram.com/kuo_ham_kun" className="uk-icon-button  uk-margin-small-right" uk-icon="icon: instagram; ratio: 1.5"> </a>
          </div>
          <img src={mob} alt="mob psycho illustration" width="400px"/>
        </div>
      </section>

    </Fragment>
  )
}

export default About;
