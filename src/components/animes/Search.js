import React, { Component, Fragment } from 'react';
import chopper from './chopper.png';
import PropTypes from 'prop-types'

class Search extends Component {

  // State
  state = {
    search: ''
  }

  // PropTypes
  static propTypes = { 
    searchAnimes: PropTypes.func.isRequired,
    clearAnimes: PropTypes.func.isRequired,
    isShowClear: PropTypes.bool.isRequired
  }

  // Events
  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.searchAnimes(this.state.search);
  }

  // Clear Search
  clearSearch = () => {
    this.setState({search: ''});
    this.props.clearAnimes();
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
            {this.props.isShowClear &&
              <button className="uk-button uk-button-text"
                onClick={this.clearSearch}>
                Clear
              </button>
            }
          </div>
        </article>
      </Fragment>
    )
  }
}

export default Search;
