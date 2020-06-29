const {MessageEmbed} = require('discord.js')
module.exports={
    name: "update",
    category: "info",
    description: "Laat de bot een update uitvoeren",
    usage: "<msg>",
    run: async(bot,message,args)=>{
        let MSG = message.content.split(`${bot.prefix}say `).join("")
        if(!MSG)return message.reply('Je hebt geen bericht opgegeven')
        const Embed = new MessageEmbed()
        .setTitle('Nieuw Bericht')
        .setDescription(MSG)
        .setColor('RANDOM')
        .setTimestamp()
        .setFooter(`© daan2341, 2020 - 2021`)
        message.channel.send(Embed)
    }
}