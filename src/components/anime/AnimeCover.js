import React, { Fragment } from 'react'

const AnimeCover = ({coverImage}) => {
  return (
    <Fragment>
      <header className="bg-muted-er">
        <div className="uk-background-cover uk-height-medium "
          style={{backgroundImage: `url("${coverImage?.large}")`}}>
          <div className="uk-overlay uk-overlay-primary uk-position-top uk-padding overlay-s">
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default AnimeCover;
