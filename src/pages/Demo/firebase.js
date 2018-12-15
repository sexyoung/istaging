import 'firebase/database';
import firebase from 'firebase/app';

const FirebaseInstance = firebase.initializeApp({
  databaseURL: 'https://vr-cam-161603.firebaseio.com',
  serviceAccount: require('data/serviceAccountKey.json')
});

export default FirebaseInstance;
