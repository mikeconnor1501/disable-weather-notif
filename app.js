const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    console.log('Deployed.');
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.WEATHER_N);
