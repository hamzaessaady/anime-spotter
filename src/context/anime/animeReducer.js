import {
  SET_LOADING,
  SET_NO_RESULT,
  SEARCH_ANIMES
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
        isNoResult: action.payload
      }
    case SEARCH_ANIMES:
      return {
        ...state,
        animes: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
}