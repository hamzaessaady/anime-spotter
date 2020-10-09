import React, { Component, Fragment } from 'react';
import chopper from './chopper.png';

class Search extends Component {

  // State
  state = {
    search: ''
  }

  // Events
  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.search);
    window.scrollTo(0, 200);
  }

  // Render
  render() {
    return (
      <Fragment>
        <article className="uk-section uk-section-primary uk-light uk-margin-bottom">
          <div className="uk-container uk-text-center">
            <h2 className="uk-text-lead uk-text-capitalize">
              Best place to search for any anime data
            </h2>
            <img src={chopper} alt="Illustration" width="200px"/>
            <form onSubmit={this.onSubmit}>
              <div className="uk-margin">
                <div className="uk-inline">
                  <input className="uk-input uk-form-width-large uk-form-large"
                    type="text" name="search" placeholder="e.g. One piece"
                    value={this.state.search} onChange={this.onChange} />
                  <button className="uk-form-icon uk-form-icon-flip"
                    type="submit" data-uk-icon="icon: search">
                  </button>
                </div>
              </div>
            </form>
          </div>
        </article>
      </Fragment>
    )
  }
}

export default Search;
