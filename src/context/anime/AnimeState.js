import React, { useReducer } from 'react';
import axios from 'axios';
import AnimeContext from './animeContext';
import AnimeReducer from './animeReducer';
import {
  SET_LOADING,
  SET_NO_RESULT,
  SEARCH_ANIMES,
  CLEAR_ANIMES
} from '../types';

const AnimeState = (props) => {

  /* Initial State */
  const initialState = {
    animes: [],
    isLoading: false,
    isNoResults: false
  }

  /* Reducer */
  const [state, dispatch] = useReducer(AnimeReducer, initialState);

  /* Actions */
  const setLoading = () => dispatch({ type: SET_LOADING });

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

  const clearAnimes = () => dispatch({ type: CLEAR_ANIMES });

  /* Provider */
  return <AnimeContext.Provider 
    value= {{
      animes: state.animes,
      isLoading: state.isLoading,
      isNoResults: state.isNoResults,
      searchAnimes,
      clearAnimes
    }}
  >
    {props.children}
  </AnimeContext.Provider>

}

export default AnimeState;
