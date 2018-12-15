import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import cx from 'classnames';

import './PanoramaList.scss';

class PanoramaList extends Component {
  state = {
    isOpen: true,
  };

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render () {
    const { isOpen } = this.state;
    return (
      <div className={cx("panorama-list", { isOpen })}>
        <div className="toggle" onClick={this.handleToggle} />
        <ul>
          {this.props.panoramaList.map((panorama, key) =>
            <li key={key}>
              <Link
                className="panorama"
                onClick={() => this.props.onIndexChange(panorama.index)}
                to={`/demo/${this.props.liveTourID}/${panorama.index}`}>
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
    );
  }
}

PanoramaList.propTypes = {
  liveTourID: PropTypes.string,
  panoramaList: PropTypes.array,
  onIndexChange: PropTypes.func,
}
export default PanoramaList
