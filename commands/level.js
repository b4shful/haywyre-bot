const Discord = require('discord.js');

exports.run = async (client, message) => { 
  var userId = `${message.author.id}`; 
  var currentLevel = client.messages.get(userId).level;
  var currentScore = client.messages.get(userId).messages;
  var remainingScore = Math.ceil(currentScore/500) * 500 - currentScore;
  var nextLevel = currentLevel + 1;

  //Build Embed for message
  const buildEmbed = new Discord.RichEmbed()
    .setTitle('Level')
    .setAuthor('WyreBot', client.user.avatarURL)
    .setColor(0x00ae86)
    .setDescription(`Your level is **${currentLevel}**. You are **${remainingScore}** messages away from **Level ${nextLevel}**.`)
    .setFooter('This bot was made by B4shful.');
    //.setThumbnail(THUMBNAIL_URL);
  message.channel.send({embed: buildEmbed});
};
  
exports.conf = {
  enabled: false,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};
  
exports.help = {
  name: "level",
  category: "Miscellaneous",
  description: "Tells you your chat level, and next available level.",
  usage: "level"
};