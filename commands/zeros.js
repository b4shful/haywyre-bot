//does what it says on the tin

exports.run = async (client, message) => { // eslint-disable-line no-unused-vars
  message.reply("Eh, fuck that guy.");   
};

exports.conf = {
  enabled: false,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};
    
exports.help = {
  name: "zeros",
  category: "Miscellaneous",
  description: "Fucks Zeros, I guess.",
  usage: "zeros"
};