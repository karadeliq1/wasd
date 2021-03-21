const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('AleykümSelam :laughing:');
  }
  if (msg.content.toLowerCase() === 'youtube') {
    msg.reply('https://www.youtube.com/c/UyuyanEfsane');
  }
  if (msg.content.toLowerCase() === 'kanal') {
    msg.reply('https://www.youtube.com/c/UyuyanEfsane');
  }
  if (msg.content.toLowerCase() === 'merhaba') {
    msg.reply('Merhaba :laughing: ');
  }
});

client.login('ODIzMjEzNDU3NDk4ODMyOTE3.YFdjRg.Msxt8-C3FYOji497bHbjsRSHY5c');
