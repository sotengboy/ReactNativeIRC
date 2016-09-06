import React, {Component} from 'react';
import {Navigator, Text, View, TouchableHighlight, StatusBar, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import ServerDetails from './ServerDetails';
import MessageBar from './MessageBar';
import MessageList from './MessageList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#E1E1E1',
  },
});

class ConnectedServer extends Component {
  static propTypes = {
    activeChannel: React.PropTypes.string,
  }

  render() {
    const routes = [
      {title: 'First Scene', index: 0},
      {title: 'Second Scene', index: 1},
    ];
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#000000" />
          <Navigator
            initialRoute={routes[0]}
            initialRouteStack={routes}
            renderScene={(route, navigator) =>
              <TouchableHighlight onPress={() => {
                if (route.index === 0) {
                  navigator.push(routes[1]);
                } else {
                  navigator.pop();
                }
              }}>
              <Text>Hello {route.title}!</Text>
              </TouchableHighlight>
            }
            style={{padding: 100}}
          />
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
