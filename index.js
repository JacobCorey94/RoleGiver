// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
	console.log('Ready!');
});

//Make a function that checks a database for matching guildid

//Make a function that lets you define what message to be listening to

//Make a function that lets you choose what roles to assign per emoji

//Bonus: Make the emojis customizable??

// Make a function that listens for reactions
client.on('ready', () =>{

    

})

// Login to Discord with your client's token
client.login(token);