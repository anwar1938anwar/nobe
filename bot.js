﻿const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("493752224753778708")
setInterval(function() {
channel.send(`Anwar YouTube gg 2k subs`);
}, 30)
})

client.login(process.env.BOT_TOKEN);