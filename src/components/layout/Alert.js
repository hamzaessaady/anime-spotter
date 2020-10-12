import React, { Fragment } from 'react'

const Alert = ({alert}) => {
  return (
    <Fragment>
      {alert !== null && 
        <div data-uk-alert
          className={`uk-alert-${alert.severity} uk-border-rounded uk-width-large
            uk-position-top-right uk-position-large 
            uk-position-absolute`} >
          <span className="uk-position-center-left uk-position-small" data-uk-icon="icon: warning; ratio: 1.5"></span>
          <p className="uk-margin-remove-vertical uk-text-bold uk-text-center">{alert.message}</p>
        </div>
      }
    </Fragment>
  )
}

export default Alert;
