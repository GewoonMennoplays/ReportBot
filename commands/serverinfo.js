const Discord = require("discord.js")
const config = require("../config.json")
const moment = require("moment")

module.exports.run = async (client, message) => {

const region = {
    'us-central': ":flag_us: US Central",
    "us-east": ":flag_us: US East",
    "us-south": ":flag_us: US South",
    "us-west": ":flag_us: US West",
    "europe": ":flag_eu: Europe",
    "singapore": ":flag_sg: Singapore",
    "japan": ":flag_jp: Japan",
    "russian": ":flag_ru: Russia",
    "hongkong": ":flag_hk: Hong Kong",
    "brazil": ":flag_br: Brazil",
    "sydnes": ":flag_au: Sydey",
    "southafrica": ":flag_za: South Africa"
}

const verificationLevels = {
    NONE: "None",
    LOW: "Low",
    MEDIUM: "Medium",
    HIGH: "High",
    VERY_HIGH: "Very High"
}

const notiLevels = {
    ALL: "All",
    MENTIONS: "Mentions"
}

const roleCount = message.guild.roles.cache.array();

const members = message.guild.members.cache.array();
const online = members.filter(m => m.presence.status === 'online').length;
const offline = members.filter(m => m.presence.status === 'offline').length;
const dnd = members.filter(m => m.presence.status === 'dnd').length;
const afk = members.filter(m => m.presence.status === 'idle').length;
const bots = members.filter(b => b.user.bot).length;

const channels = message.guild.channels.cache.array();
const textChannels = channels.filter(c => c.type === 'text').length;
const voiceChannels = channels.filter(c => c.type === "voice").length;
const categpryChannels = channels.filter(c => c.type === "category").length;
const rulesChannel = message.guild.rulesChannel ? `<#${message.guild.rulesChannel.id}>` : `None`
const systemChannel = message.guild.systemChannel ? `<#${message.guild.systemChannel.id}>\n` : `None`

message.channel.send(
    new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setThumbnail(message.guild.iconURL({size: 512}))
    .setColor(config.colors.defaultColor)
    .addField("Guild owner:", "<@" + message.guild.owner + ">\n" + message.guild.owner.id, true)
    .addField("Guild name:", message.guild.name + "\n" + message.guild.id, true)
    .addField("Guild region:", region[message.guild.region], true)
    .addField('Created On', `${moment(message.guild.createdAt).format('MMM DD YYYY')}`, true)
    .addField("Verification level:", verificationLevels[message.guild.verificationLevel], true)
    .addField("Default notifications:", notiLevels[message.guild.defaultMessageNotifications], true)
    .addField("MemberCount | Bots", `${message.guild.memberCount} | ${bots}\n> :green_circle: Online: ${online}\n> :black_circle: Offline: ${offline}\n> :red_circle: DND: ${dnd}\n> :orange_circle: Inactive: ${afk}`, true)
    .addField("Channels:", `> Total of ${message.guild.channels.cache.size}\n> # Text: ${textChannels}\n> :sound: Voice: ${voiceChannels}\n> :package: Category: ${categpryChannels}`, true)
    .addField("Special channels:", `> :newspaper: Rule channel:\n> ${rulesChannel}\n> :computer: SysChannel:\n> ${systemChannel}`, true)
    .addField("Partnered / Verified", `${message.guild.partnered} / ${message.guild.verified}`, true)
    .addField("Boosts", message.guild.premiumSubscriptionCount, true)
)

}