import {
  connectedToServer,
  serverError,
  welcomeMessage,
  joinedChannel,
  channelTopic,
  channelUsers,
  userJoinedChannel,
  userPartedChannel,
  channelMessage,
  partedChannel,
  // nickChanged,
  // userNickChanged,
} from '../actions';

export default function(client, dispatch, {host, nick}) {
  client.addListener('registered', () => {
    dispatch(connectedToServer({host, nick}));
  });

  client.addListener('error', error => {
    dispatch(serverError(error));
  });

  client.addListener('motd', message => {
    dispatch(welcomeMessage({welcomeMessage: message}));
  });

  client.addListener('join', (channel, joinedUser) => {
    if (nick === joinedUser) {
      dispatch(joinedChannel({channel}));
    } else {
      dispatch(userJoinedChannel({channel, joinedUser}));
    }
  });

  // client.addListener('+mode', (...args) => {
  //   console.log(args);
  // });

  client.addListener('part', (channel, partedUser) => {
    if (nick === partedUser) {
      dispatch(partedChannel({channel}));
    } else {
      dispatch(userPartedChannel({channel, partedUser}));
    }
  });

  client.addListener('topic', (channel, topic) => {
    dispatch(channelTopic({channel, topic}));
  });

  client.addListener('names', (channel, users) => {
    dispatch(channelUsers({channel, users}));
  });

  client.addListener('message', (sender, channel, message) => {
    dispatch(channelMessage({sender, channel, message}));
  });

  // client.addListener('nick', (oldNick, newNick, channels) => {
  //   if (nick === oldNick) {
  //     dispatch(nickChanged({newNick}));
  //   } else {
  //     dispatch(userNickChanged({oldNick, newNick, channels}));
  //   }
  // });
}
