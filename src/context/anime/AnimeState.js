import React, { useReducer } from 'react';
import axios from 'axios';
import AnimeContext from './animeContext';
import AnimeReducer from './animeReducer';
import {
  SET_LOADING,
  SET_NO_RESULT,
  SEARCH_ANIMES,
  CLEAR_ANIMES,
  GET_ANIME,
  HIDE_FOOTER,
  FETCH_NEXT,
  SET_FETCHING
} from '../types';

/* Env Vars */
let APIBaseUrl;
if (process.env.NODE_ENV !== 'production') {
  APIBaseUrl = process.env.REACT_APP_API_BASE_URL;
} else {
  APIBaseUrl = process.env.API_BASE_URL;
  // TODO Fix the undefined netlify env build var
  // For now I just pass the value directly
  if (APIBaseUrl === undefined)
    APIBaseUrl = 'https://kitsu.io/api/edge/anime';
}

const AnimeState = (props) => {

  /* Initial State */
  const initialState = {
    animes: [],
    anime: {},
    isLoading: false,
    isFetchingEnd: false,
    isNoResults: false,
    isShowFooter: true,
    nextPageLink: null
  }

  /* Reducer */
  const [state, dispatch] = useReducer(AnimeReducer, initialState);

  /* Action : Set Loading*/
  const setLoading = () => dispatch({ type: SET_LOADING });

  /* Action : Set Fetching*/
  const setFetching = () => dispatch({ type: SET_FETCHING });

  /* Action : Hide Footer*/
  const hideFooter = () => dispatch({ type: HIDE_FOOTER });

  /* Action : Search Animes*/
  const searchAnimes = async (keyword) => {
    setLoading();
    const result = await axios.get(`${APIBaseUrl}?filter[text]=${keyword}`);
    dispatch({ 
      type: SEARCH_ANIMES, 
      payload: result.data
    });
    dispatch({ 
      type: SET_NO_RESULT, 
      payload: result.data.data.length === 0 ? true : false
    });
    window.scrollTo(0, 200);
  }

  /* Action : Fetch next page*/
  const fetchNextPage = async () => {
    if (state.nextPageLink !== undefined) {
      const result = await axios.get(state.nextPageLink);
      dispatch({ 
        type: FETCH_NEXT, 
        payload: result.data
      });
    } else {
      setFetching();
    }
  }

  /* Action : Clear Animes*/
  const clearAnimes = () => dispatch({ type: CLEAR_ANIMES });

  /* Action : Get Anime*/
  const getAnime = async (id) => {
    setLoading();
    hideFooter();
    const result = await axios.get(`${APIBaseUrl}/${id}`);
    const genres = await axios.get(`${APIBaseUrl}/${id}/genres?fields[genres]=name`);
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
      isFetchingEnd: state.isFetchingEnd,
      isNoResults: state.isNoResults,
      isShowFooter: state.isShowFooter,
      searchAnimes,
      clearAnimes,
      getAnime,
      fetchNextPage
    }}
  >
    {props.children}
  </AnimeContext.Provider>

}

export default AnimeState;
