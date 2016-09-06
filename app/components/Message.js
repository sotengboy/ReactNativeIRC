import React, {Component} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 8,
    marginRight: 8,
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  senderText: {
    fontWeight: '500',
  },
  timeText: {
    color: '#555555',
    fontSize: 12,
  },
  message: {
    marginTop: 8,
    marginBottom: 16,
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
        <View style={styles.details}>
          <View>
            <Text style={styles.senderText}>
              {this.props.message.get('sender')}
            </Text>
          </View>
          <View>
            <Text style={styles.timeText}>
              {this.renderReceivedTime(
                this.props.message.get('received')
              )}
            </Text>
          </View>
        </View>
        <View style={styles.message}>
          <Text style={styles.messageText}>
            {this.props.message.get('message')}
          </Text>
        </View>
      </View>
    );
  }

  renderReceivedTime(received) {
    return moment(received).format('HH:mm:ss');
  }
}

export default Message;
