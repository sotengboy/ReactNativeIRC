export default function(client, {channel, message}) {

  if (message.startsWith('/join ')) {
    const channelToJoin = message.replace('/join ', '');
    client.join(channelToJoin);
    return;
  }

  if (message === '/leave' || message === '/part') {
    client.part(channel);
    return;
  }

  client.say(channel, message);
}
