import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './About.scss';

class PageAbout extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-about">
        about
      </div>
    );
  }
}

export default PageAbout;
