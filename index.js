const Discord = require('discord.js');
const { Client, MessageAttachment } = require('discord.js');
const client = new Client({ disableEveryone: true, partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const PREFIX = '-';
const TOKEN = process.env.DISCORD_TOKEN;
const fs = require('fs');
const commands = new Discord.Collection();
const files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const { CHANNEL, LIVE, STATUS } = require('./config.json');
const ytdl = require('ytdl-core');
let broadcast = null;
let interval = null;

for (const file of files) {
    const command = require(`./commands/${file}`)
    commands.set(command.name, command)
}
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

if (!TOKEN) {
    console.error('press Provide a Valid Discord Bot Token');
    return process.exit(1);
} else if (!CHANNEL || Number(CHANNEL) == NaN) {
    console.log('Please Provide a valid Channel ID');
    return process.exit(1);
} else if (!LIVE) {
    console.log('Please Provide a valid Youtube URL.');
}

client.on('message', async msg => {
    if (msg.author.bot) return;
    if (!msg.content.startsWith(PREFIX)) return;
    let args = msg.content.substring(PREFIX.length).split(" ")
    switch (args[0]) {
        case "ping":
            commands.get('ping').execute(msg);
            break;
    }
})