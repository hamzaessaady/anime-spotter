import React, { Fragment, useState, useContext } from 'react';
import AnimeContext from '../../context/anime/animeContext';
import AlertContext from '../../context/alert/alertContext';
import chopper from './chopper.png';

const Search = () => {

  // Context
  const animeContext = useContext(AnimeContext);
  const alertContext = useContext(AlertContext);
  const { animes, searchAnimes, clearAnimes } = animeContext;
  const { showAlert } = alertContext;

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
      <article className="uk-section uk-section-primary uk-light" 
        uk-height-viewport="expand: true">
        <div className="uk-container uk-text-center uk-margin-medium-top searchSection">
          <h2 className="uk-text-capitalize uk-text-bold uk-margin-remove-bottom"
            style={{color: "#d3efff"}}>
            Spot whatever anime you want
          </h2>
          <h3 className="uk-text-meta uk-margin-remove" style={{fontSize: "1rem"}}>
            Your best place to search for anime information 
          </h3>
          <img className="" src={chopper} alt="Illustration" width="200px"/>
          <form onSubmit={onSubmit}>
            <div className="uk-margin">
              <div className="uk-inline">
                <input className="uk-input uk-form-width-large uk-form-large"
                  type="text" name="search" placeholder="e.g. One piece"
                  value={search} onChange={onChange} />
                <button className="uk-form-icon uk-form-icon-flip"
                  type="submit" data-uk-icon="icon: search; color: red">
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

export default Search;
