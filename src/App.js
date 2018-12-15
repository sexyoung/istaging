import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';

import Header from 'components/Header';
import Home from 'pages/Home';
import Demo from 'pages/Demo';
import About from 'pages/About';
import NoMatch from 'pages/NoMatch';

// const liveTourId = 'eb24b5d8-0155-40fa-aeba-9f6edde1ac4d';

class App extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route path="/" render={({ location }) =>
            location.pathname.indexOf('/demo') ? <Header />: null
          }/>
          <Switch>
            <Route path="/demo/:liveTourID/:index?" component={Demo}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
