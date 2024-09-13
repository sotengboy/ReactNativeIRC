import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { sendMessage } from "../actions";

const styles = StyleSheet.create({
  container: {
    borderTopColor: "#CCCCCC",
    borderTopWidth: 1,
  },
  input: {
    height: 42,
    paddingLeft: 8,
    fontSize: 14,
    backgroundColor: "#FFFFFF",
  },
});

class MessageBar extends Component {
  static propTypes = {
    sendMessage: PropTypes.func,
    activeChannel: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  handleChange(value) {
    this.setState({ value });
  }

  sendMessage() {
    this.props.sendMessage({
      message: this.state.value,
      channel: this.props.activeChannel,
    });

    this.setState({ value: "" });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.value}
          placeholder="Message"
          returnKeyType="send"
          autoFocus
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.input}
          onChangeText={this.handleChange}
          onSubmitEditing={this.sendMessage}
        />
      </View>
    );
  }
}

function mapState(state) {
  return {
    activeChannel: state.get("activeChannel"),
  };
}

function mapDispatch(dispatch) {
  return {
    sendMessage: (options) => dispatch(sendMessage(options)),
  };
}

export default connect(mapState, mapDispatch)(MessageBar);
