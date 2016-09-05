export default function(client, {channel, message}) {

  if (message.startsWith('/join ')) {
    const channelToJoin = message.replace('/join ', '');
    client.join(channelToJoin);
    return;
  }

  client.say(channel, message);
}
