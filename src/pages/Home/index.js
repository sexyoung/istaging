import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

import liveTourList from 'data/liveTourCase.json';

const PageHome = props => (
  <div className="page-home">
    <div className="hero">Pre-Interview Demo</div>
    <div className="container">
      <div className="live-tour-case-list row">
        {liveTourList.map(liveTour =>
        <Link
          key={liveTour.id}
          className="col-md-4"
          to={`/demo/${liveTour.id}`}>
          <div className={`border-radius live-tour`}>
            <div className={`thumbnail ${liveTour.className}`}></div>
            <div className="name">{liveTour.name}</div>
          </div>
        </Link>
        )}
      </div>
    </div>
  </div>
);

export default PageHome
