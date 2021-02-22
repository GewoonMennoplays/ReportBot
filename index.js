//-----------------------------------------------------------------

const Discord = require("discord.js");
const fs = require("fs");
const Enmap = require("enmap")

//-----------------------------------------------------------------

const client = new Discord.Client()
const config = require("./config.json")

//-----------------------------------------------------------------

fs.readdir('./events/', (err, files) => {

  console.log("Loading events...\n")

  if (err) return console.error(err);

  files.forEach(file => {

    const event = require(`./events/${file}`);

    let eventName = file.split(".")[0];

    client.on(eventName, event.bind(null, client));

    console.log(`+ ${file}`)

  });
});

client.commands = new Enmap();

fs.readdir('./commands/', (err, files) => {

  console.log("\nLoading commnds...\n")

  if (err) return console.error(err);

  files.forEach(file => {


    if (!file.endsWith('.js')) return;

    let props = require(`./commands/${file}`);

    let commandName = file.split(".")[0];

    console.log(`+ ${commandName}.js`)

    client.commands.set(commandName, props);

  });
});

//-----------------------------------------------------------------

client.login(config.token)

console.log("Starting up ReportBot...\n")