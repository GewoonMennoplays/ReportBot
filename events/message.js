const Discord = require("discord.js")
const config = require("../config.json")

module.exports = async(client, message) => {
    if (message.author.bot) return;

    if (message.content.toLowerCase().startsWith(config.prefix)) {

        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        const cmd = client.commands.get(command);

        if (!cmd) return;

        cmd.run(client, message, args);
    }
};