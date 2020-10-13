import React, { useReducer } from 'react';
import AlertContext from './alertContext'; 
import AlertReducer from './alertReducer';
import { SHOW_ALERT, HIDE_ALERT } from '../../context/types';

const AlertState = (props) => {

  /* Initial State */
  const initialState = null;

  /* Reducer */
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  /* Action : Show Alert */
  const showAlert = (message, severity) => {
    dispatch({
      type: SHOW_ALERT,
      payload: {message, severity}
    });
    setTimeout(() => dispatch({ type: HIDE_ALERT }), 2000);
  }

  return <AlertContext.Provider 
    value={{
      alert: state,
      showAlert
    }}
  >
    {props.children}
  </AlertContext.Provider>
}

export default AlertState;