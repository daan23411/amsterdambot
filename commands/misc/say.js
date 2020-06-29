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
        const Embed = new MessageEmbed()
        .setTitle('Nieuwe Update')
        .setDescription(MSG)
        .setColor('RANDOM')
        .setTimestamp()
        .setFooter(`© daan2341, 2020 - 2021`)
        message.channel.send(Embed);
      message.delete();
    },
  };