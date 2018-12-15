import 'aframe';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {Entity, Scene} from 'aframe-react';

import firebase from './firebase';

import PanoramaList from './components/PanoramaList';

import './Demo.scss';

const formatPanorama = panoramaList => {
  console.warn(panoramaList);
  const list = Array(Object.keys(panoramaList).length);
  let item = {}
  Object.keys(panoramaList).forEach(key => {
    item = (({
      index,
      category,
      thumbnail,
      desktopUrl,
    }) => ({
      index,
      category,
      thumbnail,
      desktopUrl,
    }))(panoramaList[key].data);
    list[item.index] = item;
  });
  return list;
}

class PageDemo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      panoramaList: [],
      selectIndex: props.match.params.index,
    }

    this.fetchPanoramas = firebase
      .database()
      .ref('/panoramas')
      .orderByChild('Building')
      .equalTo(props.match.params.liveTourID);
  }

  componentDidMount() {

    this.fetchPanoramas.once('value', snapshot => {
      const panoramaList = formatPanorama(snapshot.val());
      this.setState({
        panoramaList,
        selectIndex: this.props.match.params.index || 0,
      });
    });
  }

  componentWillUnmount() {
    document.getElementsByTagName('html')[0].classList.remove('a-html');
    document.getElementsByTagName('body')[0].classList.remove('a-body');
  }

  handleIndexChange = selectIndex => {
    this.setState({ selectIndex });
  }

  render() {
    const {
      state: {
        selectIndex,
        panoramaList,
      },
      props: { match: { params: {
        liveTourID,
      } } }
    } = this;
    const panorama = (selectIndex !== undefined &&
      panoramaList.length &&
      panoramaList[selectIndex].desktopUrl
    );
    if(!panorama) return null;
    return (
      <div className="page-demo">
        <Scene>
          <Entity
            src={panorama}
            primitive='a-sky'
            ref={elem => this.sky = elem}>
          </Entity>
          <Entity primitive="a-camera" />
        </Scene>
        <PanoramaList {...{
            liveTourID,
            panoramaList,
        }} />
      </div>
    );
  }
}

export default PageDemo;
