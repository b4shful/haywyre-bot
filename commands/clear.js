//Clears a specific number of messages from a text channel.
const Logger = require('../util/Logger');

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars

  const deleteCount = parseInt(args[0], 10);
    
  if (!deleteCount || deleteCount < 1 || deleteCount > 99)
    return message.reply("Please provide a number between 1 and 99 for the number of messages to delete");

  //adds 1 to the counted messages, to account for the command message itself
  const fetched = await message.channel.fetchMessages({limit: (deleteCount + 1)});
  message.channel.bulkDelete(fetched)
    .catch(error => {
      Logger.error(error);
      message.channel.send(`Unable to bulk delete messages: \`${error}\``);
    });
  message.reply(`Cleared ${fetched.size - 1} messages.`)
    .then(msg => {
      msg.delete(1000);
    })
    .catch(error => {
      Logger.error(error);
      message.channel.send('Unable to delete temporary message.');
    } );
};
    
exports.conf = {
  enabled: false,
  guildOnly: true,
  aliases: [],
  permLevel: "Administrator"
};
    
exports.help = {
  name: "clear",
  category: "System",
  description: "Clears a specific number of messages from a text channel, also clears the command itself.",
  usage: "clear [number]"
};