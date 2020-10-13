import React, { useReducer } from 'react';
import axios from 'axios';
import AnimeContext from './animeContext';
import AnimeReducer from './animeReducer';
import {
  SET_LOADING,
  SET_NO_RESULT,
  SEARCH_ANIMES,
  CLEAR_ANIMES,
  GET_ANIME
} from '../types';

const AnimeState = (props) => {

  /* Initial State */
  const initialState = {
    animes: [],
    anime: {},
    isLoading: false,
    isNoResults: false
  }

  /* Reducer */
  const [state, dispatch] = useReducer(AnimeReducer, initialState);

  /* Action : Set Loading*/
  const setLoading = () => dispatch({ type: SET_LOADING });

  /* Action : Search Animes*/
  const searchAnimes = async (keyword) => {
    setLoading();
    const result = await axios.get(`${process.env.REACT_APP_API_BASE_URL}?filter[text]=${keyword}`);
    dispatch({ 
      type: SEARCH_ANIMES, 
      payload: result.data.data
    });
    dispatch({ 
      type: SET_NO_RESULT, 
      payload: result.data.data.length === 0 ? true : false
    });
    window.scrollTo(0, 200);
  }

  /* Action : Clear Animes*/
  const clearAnimes = () => dispatch({ type: CLEAR_ANIMES });

  /* Action : Get Anime*/
  const getAnime = async (id) => {
    setLoading();
    const result = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/${id}`);
    const genres = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/${id}/genres?fields[genres]=name`);
    result.data.data.attributes.genres = genres.data.data.map(g => g.attributes.name);
    dispatch({
      type: GET_ANIME,
      payload: result.data.data.attributes
    });
  }

  /* Provider */
  return <AnimeContext.Provider 
    value= {{
      animes: state.animes,
      anime: state.anime,
      isLoading: state.isLoading,
      isNoResults: state.isNoResults,
      searchAnimes,
      clearAnimes,
      getAnime
    }}
  >
    {props.children}
  </AnimeContext.Provider>

}

export default AnimeState;
