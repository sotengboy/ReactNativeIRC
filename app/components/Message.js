import React, {Component} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 8,
    marginRight: 8,
  },
  sender: {
    fontWeight: '500',
  },
  message: {
    paddingLeft: 4,
  },
});

class Message extends Component {
  static propTypes = {
    message: ImmutablePropTypes.map,
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.sender}>
            {this.props.message.get('sender')}
          </Text>
        </View>
        <View style={styles.message}>
          <Text>
            {this.props.message.get('message')}
          </Text>
        </View>
      </View>
    );
  }
}

export default Message;
