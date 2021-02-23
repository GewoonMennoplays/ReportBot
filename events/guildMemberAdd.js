const Discord = require("discord.js")
const config = require("../config.json")
const moment = require("moment")

module.exports = async(client, member, message) => {

if(!message.guild.id === "813479085871202334") return;
else {

member.guild.fetchInvites().then(guildInvites => {

    const ei = invites[member.guild.id];
    
    invites[member.guild.id] = guildInvites;
    
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    
    const inviter = client.users.get(invite.inviter.id);
  });

const embed = new Discord.MessageEmbed()
.setAuthor(member + "Has joined the server", member.displayAvatarURL())
.setColor(config.colors.default)
.setDescription(`This user has been invited by ${inviter}. He joined using invite code ${i.code} which has been used ${i.uses} now.`)
.setFooter(`user joined at ${moment().subtract(10, 'days').calendar()} @ ${moment().format('LT')}`)

const welcomeChannel = client.channels.cache.get("813694345932308481");

welcomeChannel.send(embed)

const countChannel = client.channels.cache.get("813694597552275467")

countChannel.setName(`Membercount: ${message.guild.memberCount}`)

}};