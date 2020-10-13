import {
  SET_LOADING,
  SET_NO_RESULT,
  SEARCH_ANIMES,
  CLEAR_ANIMES,
  GET_ANIME
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading : true
      }
    case SET_NO_RESULT:
      return {
        ...state,
        isNoResults: action.payload
      }
    case SEARCH_ANIMES:
      return {
        ...state,
        animes: action.payload,
        isLoading: false
      }
    case CLEAR_ANIMES:
      return {
        ...state,
        animes: [],
        isLoading: false,
        isNoResults: false
      }
    case GET_ANIME:
      return {
        ...state,
        anime: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
}