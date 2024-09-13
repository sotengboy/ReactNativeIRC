import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ServerPicker from "./ServerPicker";
import ConnectedServer from "./ConnectedServer";

class Application extends Component {
  static propTypes = {
    connected: PropTypes.bool,
  };

  render() {
    if (!this.props.connected) {
      return <ServerPicker />;
    }

    return <ConnectedServer />;
  }
}

function mapState(state) {
  if (state) {
    return {
      connected: !!state.getIn(["serverDetails", "connected"]),
    };
  }
}

export default connect(mapState)(Application);
