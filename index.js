//https://discord.com/api/oauth2/authorize?client_id=716080450933751929&scope=bot&permissions=464896

require('dotenv').config()
const discord = require('discord.js');
const client = new discord.Client();
const utils = require('./utils.js');

//on ready
client.on('ready', () => {
    console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
    if (!message.author.bot) {
        utils.flip(message.content,res=>message.channel.send(res))
    }
});

client.login(process.env.TOKEN);