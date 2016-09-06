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
  time: {
    marginRight: 8,
  },
  timeText: {
    color: '#555555',
    fontSize: 14,
  },
  sender: {
    marginRight: 8,
  },
  senderText: {
    fontWeight: '500',
  },
  message: {
    flex: 1,
  },
  messageText: {
    color: '#222222',
  },
});

class Message extends Component {
  static propTypes = {
    message: ImmutablePropTypes.map,
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.time}>
          <Text style={styles.timeText}>
            13:23:11
          </Text>
        </View>
        <View style={styles.sender}>
          <Text style={styles.senderText}>
            {'<'}{this.props.message.get('sender')}{'>'}
          </Text>
        </View>
        <View style={styles.message}>
          <Text style={styles.messageText}>
            {this.props.message.get('message')}
          </Text>
        </View>
      </View>
    );
  }
}

export default Message;
