const Discord = require("discord.js")
const moment = require("moment")
const config = require("../config.json")

module.exports.run = async (client, message, args) => {

const statuses = {
    online: ":green_circle: Online",
    idle: ":orange_circle: Inactive",
    offline: "Offline",
    dnd: "Do Not Disturb"
}

const flags = {
    DISCORD_EMPLOYEE: `:hammer_pick: Discord Employee`,
    DISCORD_PARTNER: `:handshake: Discord Partner`,
    BUGHUNTER_LEVEL_1: `:blue_circle: Bug Hunter (Level 1)`,
    BUGHUNTER_LEVEL_2: `:yellow_cicrle: Bug Hunter (Level 2)`,
    HYPESQUAD_EVENTS: `:tada: Hypesquad Events`,
    HOUSE_BRAVERY: `:purple_circle: House of Bravery`,
    HOUSE_BRILLIANCE: `:red_circle: House of Brilliance`,
    HOUSE_BALANCE: `:green_cricle: House of Balance`,
    EARLY_SUPPORTER: `:moneybag: Early Supporter`,
    TEAM_USER: 'Team User',
    SYSTEM: 'System',
    VERIFIED_BOT: `:white_check_mark: Verified Bot`,
    VERIFIED_DEVELOPER: `:ballot_box_with_check: Early Verified Bot Developer`
  };

  const member =  message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]) || message.member;

  const userFlags = await member.user.fetchFlags();

  const flags3 = userFlags.toArray(", ");

  let activity2;
  let customStatus;
  for (const activity of member.presence.activities.values()) {
      switch (activity.type) {
          case 'PLAYING':
              activity2 = `Playing: **${activity.name}**`
              break;
          case 'LISTENING':
              if(member.user.bot) activity2 = `Listening to **${activity.name}**`
              else activity2 = `Listening to **${activity.details}** by **${activity.state}**`
              break;
          case 'WATCHING':
              activity2 = `Watching **${activity.name}**`
              break;
          case 'STREAMING':
              activity2 = `Streaming **${activity.name}**`
              break;
          case 'CUSTOM_STATUS':
              activity2 = activity.state
              break;
      }
  }

if(activity2.lenght <1) {
    activity2 = "Nothing"
}

message.channel.send(
    new Discord.MessageEmbed()
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setThumbnail(member.user.displayAvatarURL())
    .setColor(config.colors.defaultColor)
    .addField("User:", member.user.tag, true)
    .addField("UserID:", member.id, true)
    .addField("Bot:", member.user.bot, true)
    .addField("Status:", statuses[member.presence.status], true)
    .addField("Precense:", activity2 || "None", true)
    .addField("Last message send:", "<#" + member.user.lastMessageChannelID + ">", true)
    .addField("Badges:", flags[flags3] || "No badges", true)
    .addField("Account created:", moment(member.user.createdAt).format('MMM DD YYYY'), true)
    .addField("Joined server:", moment(member.joinedAt).format('MMM DD YYYY'), true)
)

}