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
  message: {
    color: '#999999',
  },
});

class StatusMessage extends Component {
  static propTypes = {
    message: ImmutablePropTypes.map,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          {'> '} {this.props.message.get('message')}
        </Text>
      </View>
    );
  }
}

export default StatusMessage;
