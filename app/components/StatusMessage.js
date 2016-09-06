import React, {Component} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 16,
    marginLeft: 8,
    marginRight: 8,
  },
  icon: {
    marginRight: 8,
  },
  message: {
    color: '#888888',
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
          <Icon name="bell-o" size={12} style={styles.icon} />
          {' '}
          {this.props.message.get('message')}
        </Text>
      </View>
    );
  }
}

export default StatusMessage;
