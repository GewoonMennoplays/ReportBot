const Discord = require("discord.js")
const config = require("../config.json")
const moment = require("moment")

return;

module.exports.run = async (client, message, args) => {

let rReason;
let rProof;

const rUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]) || message.member;

await message.channel.send("Why would you like to report this user?")

await message.channel.awaitMessages(m => m.author.id === message.author.id, {time: "200000", max: 1})
.then(collected => {
    rReason = collected
})

await message.channel.send("Please provide proof for reporting this user.")

await message.channel.awaitMessages(m => m.author.id === message.author.id, {time: "200000", max: 1})
.then(collected => {
    rProof = collected
})

const confirmEmbed = new Discord.MessageEmbed()
.setTitle("Please confirm if you've provided the right information")
.addField("Reporting:", rUser, true)
.addField("Reason:", rReason, true)
.addField("Proof:", rProof, true)
.setColor(config.colors.default)
.setFooter("Please react a reaction under this message to proceed your report or to abort your report. After 30 seconds, you can no longer react")

const confirmMessage = message.channel.send(confirmEmbed).then(msg1 => {
    msg1.react("✅").then(msg1.react("❌"))
})

const filter = (reaction, user) => {
	return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions(filter, {max: 1, time: 30000, errors: ["time"]}).then(collected => {
    const reaction = collected.first();

    if(reaction.emoji.name === "✅") {

        const reportEmbed = new Discord.MessageEmbed()
        .setTitle("Received a new report")
        .addField("Reporting:", rUser + "\n(" + rUser.id + ")", true)
        .addField("Reporting:", message.author.tag + "\n(" + message.author.id + ")", true)
        .addField("Reason for reporting:", rReason, true)
        .addField("Proof:", rProof, true)
        .addField("This report was sent ad", moment().format('MMMM Do YYYY, h:mm:ss a'))
        .setFooter("ReportID: Will be added soon")

        const reportLogChannel = client.channels.cache.get("813757153562329109")

        reportLogChannel.send(reportEmbed)

        const confirmedEmbed = new Discord.MessageEmbed()
        .setDescription("Your report has been submitted succesfully!")
        .setTimestamp()

        confirmMessage.edit({embed: confirmedEmbed})

    }

    if(reaction.emoji.name === "❌") {
        const abortedEmbed = new Discord.MessageEmbed()
        .setDescription("Your report has been abborted! Feel free to report someone else using `.report` again.")
        return;
    }
})
}