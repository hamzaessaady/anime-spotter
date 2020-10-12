import React, { Fragment } from 'react';
import { useState } from 'react';
import chopper from './chopper.png';
import PropTypes from 'prop-types';

const Search = ({ searchAnimes, showAlert, clearAnimes, isShowClear }) => {

  // State
  const [search, setSearch] = useState('');

  // Events
  const onChange = (event) => {
    setSearch(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const keyword = search.trim();
    if (keyword !== '') {
      searchAnimes(keyword);
    } else {
      showAlert('Please enter a valid keyword !', 'danger');
    } 
  }

  // Clear Search
  const clearSearch = () => {
    setSearch('');
    clearAnimes();
  }

  // Return
  return (
    <Fragment>
      <article className="uk-section uk-section-primary uk-light uk-margin-bottom">
        <div className="uk-container uk-text-center uk-margin-medium-top">
          <h2 className="uk-text-capitalize">
            Best place to search for any anime data
          </h2>
          <img src={chopper} alt="Illustration" width="200px"/>
          <form onSubmit={onSubmit}>
            <div className="uk-margin">
              <div className="uk-inline">
                <input className="uk-input uk-form-width-large uk-form-large"
                  type="text" name="search" placeholder="e.g. One piece"
                  value={search} onChange={onChange} />
                <button className="uk-form-icon uk-form-icon-flip"
                  type="submit" data-uk-icon="icon: search">
                </button>
              </div>
            </div>
          </form>
          {isShowClear &&
            <button className="uk-button uk-button-text"
              onClick={clearSearch}>
              Clear
            </button>
          }
        </div>
      </article>
    </Fragment>
  )

}

// PropTypes
Search.propTypes = { 
  searchAnimes: PropTypes.func.isRequired,
  clearAnimes: PropTypes.func.isRequired,
  showAlert: PropTypes.func.isRequired,
  isShowClear: PropTypes.bool.isRequired
}

export default Search;
