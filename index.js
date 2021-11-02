const Discord = require('discord.js')
const { Client, MessageAttachment } = require('discord.js')
const client = new Client({ disableEveryone: true, partials: ["MESSAGE", "CHANNEL", "REACTION"] })