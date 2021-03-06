const Logger = require('../util/Logger');


/**
 * This event executes when a new member joins a server.
 * 
 * @param {Discord.Client} client The Discord API client
 * @param {Discord.Member} member A message on Discord
 */
module.exports = (client, member) => {

  //Set IFTTT webhook key to that of the config.
  //const key = client.config.webhookKey;

  const {
    staffChannel,
    welcomeEnabled,
    welcomeMessage,
    welcomeChannel
  } = client.settings.get(member.guild.id);

  //Send the Asmo meme message to a webhook which should trigger IFTTT which should trigger another webhook.
  //client.triggerIftttMakerWebhook('user_joined', key);
  
  // If welcome is off, don't proceed (don't welcome the user)
  if (welcomeEnabled !== 'true') {
    Logger.error('Welcome message is not enabled in bot configuration.');
    return;
  }

  if (!welcomeMessage) {
    Logger.error('`welcomeMessage` is missing from bot configuration.');
    return;
  }

  if (!welcomeChannel) {
    Logger.error('`welcomeChannel` is missing from bot configuration.');
    return;
  }

  if (!staffChannel) {
    Logger.error('`staffChannel` is missing from bot configuration.');
    return;
  }

  // Replace the placeholders in the welcome message with the member's mention.
  const message = welcomeMessage.replace("{{user}}", `${member}`);

  member.guild.channels.find('name', staffChannel)
    .send(`User ${member} joined Haywyre.`)
    .catch(Logger.error);

  // Send the welcome message to the welcome channel
  // There's a place for more configs here.
  member.guild.channels.find("name", welcomeChannel)
    .send(message)
    .catch(Logger.error);

};