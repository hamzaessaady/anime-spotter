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

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading : true
      }
    case SET_FETCHING:
      return {
        ...state,
        isFetchingEnd : true
      }
    case SET_NO_RESULT:
      return {
        ...state,
        isNoResults: action.payload
      }
    case SEARCH_ANIMES:
      return {
        ...state,
        animes: action.payload.data,
        nextPageLink: action.payload.links.next,
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
        isLoading: false,
        isShowFooter: true
      }
    case FETCH_NEXT:
      return {
        ...state,
        animes: [
          ...state.animes,
          ...action.payload.data,
        ],
        nextPageLink: action.payload.links.next
      }
    case HIDE_FOOTER:
      return {
        ...state,
        isShowFooter: false
      }
    default:
      return state;
  }
}