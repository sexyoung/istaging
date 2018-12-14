import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './NoMatch.scss';

class PageNoMatch extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-no-match">
        no match
      </div>
    );
  }
}

export default PageNoMatch;
