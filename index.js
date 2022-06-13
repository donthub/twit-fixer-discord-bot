// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
});

client.on('messageCreate', message => {
    const re = /^https:\/\/twitter.com\/([^\s]+)\s*$/;
    const match = re.exec(message.content);
    if (match) {
        message.delete();
        message.channel.send(`Originally posted by <@${message.author.id}>\nhttps://vxtwitter.com/${match[1]}`);
    }
});

// Login to Discord with your client's token
client.login(token);
