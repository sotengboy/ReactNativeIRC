/* eslint-env browser */
import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";

import "./shim";
import { name as appName } from "./app.json";
import Store from "./app/dispatcher";
import Application from "./app/components/Application";

class EvoChat extends Component {
  render() {
    return (
      <Provider store={Store()}>
        <Application />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => EvoChat);
