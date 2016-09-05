import React, {Component} from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import ServerDetails from './ServerDetails';
import MessageBar from './MessageBar';
import MessageList from './MessageList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#DCDCDC',
  },
});

class ConnectedServer extends Component {
  static propTypes = {
    activeChannel: React.PropTypes.string,
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#000000" />
        <ServerDetails />
        {this.props.activeChannel && (
          <MessageList />
        )}
        <MessageBar />
      </View>
    );
  }
}

function mapState(state) {
  return {
    activeChannel: state.get('activeChannel'),
  };
}

export default connect(mapState)(ConnectedServer);
