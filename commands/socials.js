//gives social information for Haywyre
exports.run = (client, message) => { 
  /* eslint-disable no-unused-vars*/

  const twitterEmoji = client.emojis.find(emoji => emoji.name === 'twitter');
  const facebookEmoji = client.emojis.find(emoji => emoji.name === 'facebook');
  const instagramEmoji = client.emojis.find(emoji => emoji.name === 'instagram');
  const soundcloudEmoji = client.emojis.find(emoji => emoji.name === 'soundcloud');
  const youtubeEmoji = client.emojis.find(emoji => emoji.name === 'youtube');
  const snapchatEmoji = client.emojis.find(emoji => emoji.name === 'snapchat');
  const globe = ":globe_with_meridians:";
  
  /*Send message using template literal, to use emoji variables and 
  multiline text*/
  const socialMessage =`
${twitterEmoji} <https://twitter.com/haywyremusic>
${facebookEmoji} <https://facebook.com/haywyre>
${instagramEmoji} <https://instagram.com/haywyre>
${soundcloudEmoji} <https://soundcloud.com/haywyre>
${youtubeEmoji} <https://youtube.com/haywyremusic>
${snapchatEmoji} haywyremusic
${globe} http://haywyremusic.com`;

  message.channel.send(socialMessage); 
};
  
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["social"],
  permLevel: "User"
};
      
exports.help = {
  name: "socials",
  category: "Miscellaneous",
  description: "Sends Haywyre social media info into the channel.",
  usage: "socials"
};