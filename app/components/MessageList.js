import React, {Component} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {View, ListView, ScrollView} from 'react-native';
import InvertibleScrollView from 'react-native-invertible-scroll-view';
import {connect} from 'react-redux';

import Message from './Message';
import StatusMessage from './StatusMessage';

const styles = {
  container: {
    flex: 1,
    marginTop: 4,
    marginBottom: 4,
  },
}

class MessageList extends Component {
  static propTypes = {
    messages: ImmutablePropTypes.list,
  }

  getDataSource() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    return dataSource.cloneWithRows(
      this.props.messages.reverse().toArray()
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          enableEmptySections
          dataSource={this.getDataSource()}
          renderRow={this.renderMessage}
          renderScrollComponent={this.renderScrollComponent}
        />
      </View>
    );
  }

  renderMessage(message) {
    const MessageComponent = message.get('type') === 'status' ? StatusMessage : Message;

    return (
      <MessageComponent message={message} />
    );
  }

  renderScrollComponent(props) {
    return (
      <InvertibleScrollView {...props} inverted />
    );
  }
}

function mapState(state) {
  const activeChannel = state.get('activeChannel');
  return {
    messages: state.getIn(['channels', activeChannel, 'messages']),
  };
}

export default connect(mapState)(MessageList);
