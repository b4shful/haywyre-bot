/**
 * Responds with a link to Tainmere's SoundCloud.
 * 
 * @param {Discord.Client} client The Discord API client
 * @param {Discord.Message} message A message on Discord
 * @param {Array<string>} args An array of tokens used as command arguments
 * @param {number} level The permission level of the author of the message
 */
exports.run = (client, message) => {
  message.channel.send('Tainmere\'s Production Resources: http://bit.ly/2AZyDOc');
};
  
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};
  
exports.help = {
  name: "tainmere",
  category: "Links",
  description: "Responds with a link to Tainmere's Music Resources.",
  usage: "tainmere"
};
  