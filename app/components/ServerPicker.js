import React, {Component} from 'react'
import {View, Text, TextInput, TouchableHighlight, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {createConnection} from '../actions';

const styles = StyleSheet.create({
  textInput: {
    height: 40,
  },
  loading: {
    padding: 16,
  },
  error: {
    padding: 16,
  },
});

class ServerPicker extends Component {
  static propTypes = {
    createConnection: React.PropTypes.func,
    connecting: React.PropTypes.bool,
    error: React.PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.state = {
      host: 'irc.phpfreaks.com',
      nick: 'Adam',
    };

    this.onPressConnect = this.onPressConnect.bind(this);
    this.handleHostChange = this.handleHostChange.bind(this);
    this.handleNickChange = this.handleNickChange.bind(this);
  }

  onPressConnect() {
    this.props.createConnection({
      host: this.state.host,
      nick: this.state.nick,
    });
  }

  handleHostChange(value) {
    return this.setState({host: value});
  }

  handleNickChange(value) {
    return this.setState({nick: value});
  }

  render() {
    return (
      <View>
        <TextInput
          value={this.state.host}
          placeholder="Host"
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={this.handleHostChange}
        />
        <TextInput
          value={this.state.nick}
          placeholder="Nick"
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={this.handleNickChange}
        />
        <TouchableHighlight onPress={this.onPressConnect}>
          <Text>Connect</Text>
        </TouchableHighlight>

        {this.renderPotentialLoading()}
        {this.renderPotentialError()}
      </View>
    );
  }

  renderPotentialLoading() {
    if (!this.props.connecting) return false;

    return (
      <View style={styles.loading}>
        <Text>Connecting...</Text>
      </View>
    );
  }

  renderPotentialError() {
    if (!this.props.error) return false;

    return (
      <View style={styles.error}>
        <Text>ERROR!</Text>
        <Text>{this.props.error}</Text>
      </View>
    );
  }
}

function mapState(state) {
  return {
    connecting: state.getIn(['serverDetails', 'connecting']),
    error: state.getIn(['serverDetails', 'error']),
  };
}

function mapDispatch(dispatch) {
  return {
    createConnection: options => dispatch(createConnection(options)),
  };
}

export default connect(mapState, mapDispatch)(ServerPicker);
