const Discord = require("discord.js")
const config = require("../config.json")

module.exports.run = async (client, message, args) => {

// Checking if command is enabled

if(config.modules.suggestionsEnabled === "false") return;

if(config.modules.suggestionsEnabled === "true") {

// Checking for the suggestionschannel and getting the channel/ID

if(config.suggestions.channelID === "" || !isNaN) return message.channel.send("The suggestions channel has not been setup correctly. Please contact a server administrator.")

const sChannel = config.suggestions.channelID

const sChannelName = message.guild.channels.cache.get(sChannel);

const sChannelID = message.guild.channels.cache.get(sChannel).id;

// Command channel id

if(config.suggestions.cmdChannelID === ""|| !isNaN) {
    return message.channel.send("The suggestions command channel has not been setup correctly. Please contact a server administrator.")
} else {

const cmdChannel = config.suggestions.cmdChannelID;

const cmdChannelTag = message.guild.channels.cache.get(cmdChannel)

const cmdChannelID = cmdChannelTag.id;

if(!cmdChannelTag) return message.channel.send("The suggetion command channel has not been setup correctly. Please contact a server administrator.")

if(cmdChannelTag !== message.channel) return message.channel.send("You can only make suggestions in <#" + cmdChannelID + ">")

}

const suggestion = args.join(" ")
if(!suggestion) return message.channel.send("A suggestion without a suggestion message couldn't be send. Please use ``!suggest <suggestion> to send a suggestion.")

const sEmbed = new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.displayAvatarURL())
.setColor(config.colors.suggestionsColor)
.setDescription(suggestion)

sChannelName.send(sEmbed).then(msg1 => {
    msg1.react("✅")
    msg1.react("❌")
})

message.channel.send("Your suggestion has been send to <#" + sChannelID + "> to be voted on!")

}

}