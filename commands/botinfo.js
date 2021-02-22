const Discord = require("discord.js")
const config = require("../config.json")

module.exports.run = async (client, message, args) => {

message.channel.send(
    new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setDescription("Hi! My name is Mikey. I am a multiple purpose Discord bot and highly customizable as you can edit the bot files. You still have to host the bot by yourself, but thats it! Please use the ``" + config.prefix + "help`` command to see my commands.\n\n[Github](https://github.com/GewoonMennoplays/mikey) | Contact Mennoplays#0001 to get access to the github repo!")
    .setColor(config.colors.defaultColor)
)

}

module.exports.help = {
   name: "botinfo"
}