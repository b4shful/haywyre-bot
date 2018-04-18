//Clears a specific number of messages from a text channel.

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars

//adds 1 to the counted messages, to account for the command message itself
  const deleteCount = parseInt((args[0], 10) + 1);
    
  if (!deleteCount || deleteCount < 1 || deleteCount > 100)
    return message.reply("Please provide a number between 1 and 100 for the number of messages to delete");

  const fetched = await message.channel.fetchMessages({limit: deleteCount});
  message.channel.bulkDelete(fetched)
    .catch(error => {
      console.log(error);
      message.channel.send("An error occured while running this command.");
    });
  message.reply(`Cleared ${fetched.size} messages.`);
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