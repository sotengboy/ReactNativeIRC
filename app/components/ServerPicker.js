import React, {Component} from 'react'
import {connect} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

import {createConnection} from '../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#E1E1E1',
  },
  connecting: {
    marginBottom: 16,
    alignItems: 'center',
  },
  textInput: {
    marginBottom: 16,
    paddingLeft: 8,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
    borderWidth: 1,
  },
  touchable: {
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: '#222222',
  },
  touchableText: {
    color: '#FFFFFF',
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
      host: '',
      nick: '',
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
    if (this.props.connecting) {
      return this.renderLoadingIndicator();
    }

    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.host}
          placeholder="Host"
          autoFocus
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
        <TouchableHighlight onPress={this.onPressConnect} style={styles.touchable}>
          <Text style={styles.touchableText}>
            Connect
          </Text>
        </TouchableHighlight>

        {this.renderPotentialError()}
      </View>
    );
  }

  renderLoadingIndicator() {
    return (
      <View style={styles.container}>
        <View style={styles.connecting}>
          <Text>Connecting</Text>
        </View>
        <ActivityIndicator />
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
