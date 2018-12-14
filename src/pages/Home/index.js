import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Home.scss';

import liveTourList from 'data/liveTourCase.json';

class PageHome extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-home">
        home
        <div className="hero">preInterview</div>
        <div className="live-tour-case-list">
          {liveTourList.map(liveTour =>
            <Link
              key={liveTour.id}
              className="live-tour"
              to={`/demo/${liveTour.id}`}>
              {liveTour.name}
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default PageHome;
