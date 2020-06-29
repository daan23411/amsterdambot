const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "say",
    category: "misc",
    description: "Een nieuw bericht melden! (ADMINISTRATOR VEREIST)",
    usage: "<msg>",
    run: async (bot, message, args) => {
      if (!message.member.permissions.has("ADMINISTRATOR")) return;
      let MSG = message.content.split(`${bot.prefix}say `).join("");
      if (!MSG)
        return message.channel.send(`Geen bericht opgegeven!`);
    message.channel.send(MSG);
    message.delete();
    },
  };