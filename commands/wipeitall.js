//Wipes everything in the messages Enmap for every user.

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  message.guild.members.forEach(function(guildMember, guildMemberId) {
    const user = guildMemberId;
    client.messages.set(user, { messages: 0, level: 0 });
  });
};
  
exports.conf = {
  enabled: false,
  guildOnly: true,
  aliases: [],
  permLevel: "Bot Owner"
};
  
exports.help = {
  name: "wipeitall",
  category: "System",
  description: "Wipes ALL message count data.",
  usage: "wipeitall"
};