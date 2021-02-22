const Discord = require("discord.js")
const config = require("../config.json")
const moment = require("moment")

module.exports = async(client, member, message) => {

if(config.modules.memberJoin === "false") return;

if(config.modules.memberJoin === "true") {

if(config.memberJoin.joinRoleID === [0-9]) {
    joinRole = message.guild.roles.cache.get(config.memberJoin.joinRoleID).id;

    if(!joinRole) return console.log(
        "WARNING",
        "The joinRole in the config has not been setup correctly."
    )

    member.roles.give(joinRole);
} else {
    console.log(
        "WARNING",
        "The joinRole in the config must have a numberic value!"
    )
}

member.guild.fetchInvites().then(guildInvites => {

    const ei = invites[member.guild.id];
    
    invites[member.guild.id] = guildInvites;
    
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    
    const inviter = client.users.get(invite.inviter.id);
  });

let rMessage;

if(config.memberJoin.rulesChannelID === "" || ![0-9]) {
    rMessage = "As no rules channel has been set, use your mind to know whats allowed and whats not."
}

if(config.memberJoin.rulesChannelID === [0-9]) {

    const rChannel = config.memberJoin.rulesChannelID;

    rMessage = "Make sure to be following our rules which can be found in <#" + rChannel + ">, and use your mind."
}

const embed = new Discord.MessageEmbed()
.setAuthor(member.tag + " has joined the server!")
.setDescription("This user account was created on " + moment(member.user.createdAt).format('MMM DD YYYY') + ". This user has been invite by " + inviter.tag + " using invite code " + invite.code + " which is now being used " + invite.uses + " times! " + rMessage)
.setColor(config.colors.memberJoinColor)
.setFooter(`This guild has now ${member.guild.memberCount} members`)

let jChannel;

if(config.memberJoin.messageChannelID === "" || ![0-9]) {
    jChannel = config.general.backupChannelID

    if(config.general.backupChannelID === "" || ![0-9]) {
        console.log(
            "WARNING",
            "The messageChannelID in the section memberJoin has not been setup correctly! The backupChannelID couldn't also be used as that channel is also not set correctly."
        )

    if(config.general.backupChannelID === [0-9]) {

    jChannel = config

    guild = member.guild;

    guild.channels.cache.get(jChannel)

    jChannel.send(embed);

    }

    }
}

if(config.memberJoin.memberCountChannelID === "");

if(config.memberJoin.memberCountChannelID === [0-9] || [a-z] || [A-Z]) {

const cChannel = guild.channels.cache.get(config.memberJoin.memberCountChannelID);

if(!cChannel) {
    if(guild.me.permissions.has("MANAGE_CHANNELS", "ADMINISTRATOR")) {
        message.guild.channels.create(`Membercount: ${guild.memberCount}`, {
            type: "voice"
        }).then(c => {
            c.createOverwrites("@everyone", {
                VIEW_CHANNEL: "true",
                JOIN_CHANNEL: "false",
            })
            c.createOverwrites(joinRole, {
                VIEW_CHANNEL: "true",
                JOIN_CHANNEL: "false"
            })

        cChannel = c;
        })
    } else {
        console.log(
            "WARNING!",
            "The member count channel couldn't be found! I also don't have the manage channels permissions are administrator permissions to create one, so that couldn't be done."
        )

    
    }

    if(config.memberJoin.memberCountChannelID !== "" || ![a-z] || ![A-Z] || ![0-9]) {
        console.log(
            "WARNING!",
            "The member count channel couldn't be found or the value is having non-numberic or non-alfabetic chacacters!"
        )}

        cChannel.setName(`MemberCount: ${guild.memberCount}`)
}
}

if(config.memberJoin.lastNameJoinedChannelID === "" || ![0-9] || ![a-b] || ![A-B]);

if(config.memberJoin.lastNameJoinedChannelID === [0-9]) {

const lChannelS = config.memberJoin.lastNameJoinedChannelID;

const lChannel = guild.channels.cache.get(lChannelS);

if(lChannel) {
    console.log(
        "WARNING!",
        "The last member joined channelID couldn't be found or the value is having non-numberic or non-alfabetic chacacters!"
    )
return;
} else {
    lChannel.setName(`Last joined: ${member.tag}`)
}}}
};