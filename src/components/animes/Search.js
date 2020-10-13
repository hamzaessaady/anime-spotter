import React, { Fragment } from 'react';
import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import AnimeContext from '../../context/anime/animeContext'
import chopper from './chopper.png';

const Search = ({ showAlert }) => {

  // Context
  const animeContext = useContext(AnimeContext);
  const { 
    searchAnimes,
    clearAnimes,
    animes
  } = animeContext;

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
          {animes.length > 0 &&
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
  showAlert: PropTypes.func.isRequired,
}

export default Search;
