const { Client, Intents } = require('discord.js');
const { token, servers } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('Application started');
});

client.on('messageCreate', message => {
    const re = /^\s*https:\/\/([^\s]+\.)?twitter.com\/([^\s?]+)(\?[^\s]*)?\s*$/;
    const match = re.exec(message.content);
    if (!match || isRestricted(message)) {
        return;
    }

    console.log(`Recreating message in ${message.guild.name} / ${message.channel.name}`);
    message.delete();
    message.channel.send(`Originally posted by <@${message.author.id}>\nhttps://vxtwitter.com/${match[2]}`);
});

client.login(token);

function isRestricted(message) {
    const serverId = message.guild.id;
    const included = [];
    const excluded = [];
    for (const server of servers) {
        if (server.id !== serverId) {
            continue;
        }
        included.push(...server.channels.included);
        excluded.push(...server.channels.excluded);
    }

    const channelId = message.channel.id;
    return excluded.includes(channelId) || included.length && !included.includes(channelId);
}
