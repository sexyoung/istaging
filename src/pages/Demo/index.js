import 'aframe';
import 'firebase/database';
import React, { Component } from 'react';
import {Entity, Scene} from 'aframe-react';
import firebase from 'firebase/app';
import './Demo.scss';
import PropTypes from 'prop-types';

// const liveTourId = 'eb24b5d8-0155-40fa-aeba-9f6edde1ac4d';

class PageDemo extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  state = {
    selectKey: '',
    panoramaList: {},
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // const VRCamFirebase = firebase.initializeApp({
      // databaseURL: 'https://vr-cam-161603.firebaseio.com',
      // serviceAccount: require('./data/serviceAccountKey.json')
    // });
//
    // const fetchPanoramas = VRCamFirebase.database().ref('/panoramas').orderByChild('Building').equalTo(liveTourId)
    // fetchPanoramas.once('value', snapshot => {
      // const panoramaList = snapshot.val();
      // console.warn(panoramaList);
      // this.setState({
        // selectKey: Object.keys(panoramaList)[0],
        // panoramaList: Object.keys(panoramaList).reduce((obj, key) => ({
          // ...obj,
          // [key]: panoramaList[key].data,
        // }), {})
      // });
    // });

  }

  render() {
    const { selectKey, panoramaList } = this.state;
    const panorama = selectKey && panoramaList[selectKey].desktopUrl;
    return (
      <Scene>
        <Entity primitive='a-text' value='Hello, WebVR!'  color="#111" position="0 2.5 -2" align="center"/>
        {panorama &&
          <Entity primitive='a-sky' src={panorama}/>
        }
        <Entity primitive="a-camera"  />
      </Scene>
    );
  }
}

export default PageDemo;
