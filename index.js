//https://discord.com/api/oauth2/authorize?client_id=716080450933751929&scope=bot&permissions=464896

require('dotenv').config()
const discord = require('discord.js');
const client = new discord.Client();

//on ready
client.on('ready', () => {
    console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
    // If the message is "ping"
    if (message.content === 'Hello') {
        // Send "pong" to the same channel
        message.channel.send('Hey!');
    }
});

client.login(process.env.TOKEN);