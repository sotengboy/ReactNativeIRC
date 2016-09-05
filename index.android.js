/* eslint-env browser */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';

import './polyfills';
import createStore from './app/dispatcher';
import Application from './app/components/Application';

class AwesomeProject extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <Application />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
