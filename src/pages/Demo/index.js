import 'aframe';
import 'aframe-animation-component';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Entity, Scene} from 'aframe-react';

import firebase from './firebase';

import PanoramaList from './components/PanoramaList';
import liveTourList from 'data/liveTourCase.json';

import './Demo.scss';
let liveTourName = "";

const formatPanorama = panoramaList => {
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

    const {
      index: selectIndex,
      liveTourID,
    } = props.match.params;

    this.state = {
      loaded: false,
      panoramaList: [],
      selectIndex: selectIndex || 0,
    }

    liveTourName = liveTourList
                    .find(liveTour =>
                      liveTour.id === liveTourID).name;

    this.fetchPanoramas = firebase
      .database()
      .ref('/panoramas')
      .orderByChild('Building')
      .equalTo(liveTourID);
  }

  componentDidMount() {
    this.downloadingImage = new Image();
    this.downloadingImage.onload = function() {
      setTimeout(() => document.getElementById('sky').emit('fadein'), 800);
    };
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
    document.getElementById('sky').emit('fadeout');
    setTimeout(() => {
      this.setState({ selectIndex });
      this.downloadingImage.src = this.state.panoramaList[selectIndex].desktopUrl;
    }, 200);
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
    return (
      <div className="page-demo">
        <div className="name">{liveTourName}</div>
        <Link to="/" className="back">Back</Link>
        <div className="loading">Entering</div>
        <Scene>
          <Entity
            id="sky"
            src={panorama}
            primitive='a-sky'
            animation__fadein="startEvents: fadein; property: material.opacity; from: 0; to: 1; dur: 500;"
            animation__fadeout="startEvents: fadeout; property: material.opacity; from: 1; to: 0; dur: 200;"
          />
        </Scene>
        <PanoramaList {...{
            liveTourID,
            panoramaList,
            selectIndex: +selectIndex,
            onIndexChange: this.handleIndexChange
        }} />
      </div>
    );
  }
}

export default PageDemo;
