import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import './PanoramaList.scss';

const PanoramaList = (props) => {
  return (
    <div className="panorama-list">
      <ul>
        {props.panoramaList.map((panorama, key) =>
          <li key={key}>
            <Link
              className="panorama"
              onClick={() => this.handleIndexChange(panorama.index)}
              to={`/demo/${props.liveTourID}/${panorama.index}`}>
              <div
                className="image"
                style={{
                  backgroundImage: `url(${panorama.thumbnail})`
                }}
              />
              <div className="category">{panorama.category}</div>
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

PanoramaList.propTypes = {
  liveTourID: PropTypes.string,
  panoramaList: PropTypes.array,
}
export default PanoramaList
