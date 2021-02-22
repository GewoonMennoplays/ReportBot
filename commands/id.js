const config = require("../config.json")

module.exports.run = async (client, message, args) => {

let theUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]) || message.member;

if(theUser) {

    message.channel.send(theUser.id)

} else {

    message.channel.send(message.author.id)

}}