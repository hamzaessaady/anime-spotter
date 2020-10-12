import React, { useReducer } from 'react';
import AnimeContext from './animeContext';
import AnimeReducer from './animeReducer';
import {} from '../types';

const AnimeState = (props) => {

  /* Initial State */
  const initialState = {
    
  }

  /* Reducer */
  const [state, dispatch] = useReducer(AnimeReducer, initialState);

  /* Actions */

  /* Provider */
  return <AnimeContext.Provider value= {{}}>
    {props.children}
  </AnimeContext.Provider>

}

export default AnimeState;
