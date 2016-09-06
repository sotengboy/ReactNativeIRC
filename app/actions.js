import irc from 'irc';

import bindClientListeners from './irc/client-listeners';
import sendClientMessage from './irc/message-sender';

let client = null;

export function createConnection({host, nick}) {
  return dispatch => {
    dispatch(connectingToServer());

    client = new irc.Client(host, nick, {
      userName: 'reactnative',
      realName: 'React Native IRC Client',
    });

    bindClientListeners(client, dispatch, {host, nick});
  }
}

export function sendMessage({channel, message}) {
  return dispatch => {
    sendClientMessage(client, {channel, message});
    dispatch(messageSent({channel, message}));
  };
}

export function connectingToServer() {
  return {type: 'CONNECTING_TO_SERVER'};
}

export function connectedToServer(payload) {
  return {type: 'CONNECTED_TO_SERVER', ...payload};
}

export function serverError(payload) {
  return {type: 'SERVER_ERROR', ...payload};
}

export function welcomeMessage(payload) {
  return {type: 'WELCOME_MESSAGE', ...payload};
}

export function joinedChannel(payload) {
  return {type: 'JOINED_CHANNEL', ...payload};
}

export function channelTopic(payload) {
  return {type: 'CHANNEL_TOPIC', ...payload};
}

export function channelUsers(payload) {
  return {type: 'CHANNEL_USERS', ...payload};
}

export function userJoinedChannel(payload) {
  return {type: 'USER_JOINED_CHANNEL', ...payload};
}

export function userPartedChannel(payload) {
  return {type: 'USER_PARTED_CHANNEL', ...payload};
}

export function channelMessage(payload) {
  return {type: 'CHANNEL_MESSAGE', ...payload};
}

export function partedChannel(payload) {
  return {type: 'PARTED_CHANNEL', ...payload};
}

export function messageSent(payload) {
  return {type: 'MESSAGE_SENT', ...payload};
}

// export function nickChanged(payload) {
//   return {type: 'NICK_CHANGED', ...payload};
// }
//
// export function userNickChanged(payload) {
//   return {type: 'USER_NICK_CHANGED', ...payload};
// }
