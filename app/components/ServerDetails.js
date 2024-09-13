import React, { Component } from "react";
import ImmutablePropTypes from "react-immutable-proptypes";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: "#333333",
  },
  text: {
    color: "#FFFFFF",
  },
});

class ServerDetails extends Component {
  static propTypes = {
    serverDetails: ImmutablePropTypes.map,
    activeChannel: PropTypes.string,
  };

  render() {
    const { serverDetails, activeChannel } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {serverDetails.get("host")}
          {activeChannel && (
            <Text>
              {" > "}
              {activeChannel}
            </Text>
          )}
        </Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    serverDetails: state.get("serverDetails"),
    activeChannel: state.get("activeChannel"),
  };
}

export default connect(mapStateToProps)(ServerDetails);
