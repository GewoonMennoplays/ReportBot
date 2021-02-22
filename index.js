// Getting the packages which are required for the main file

const Discord = require("discord.js");
const fs = require("fs");
const Enmap = require("enmap")

// Let the system make a bot client

const client = new Discord.Client()
const config = require("./config.json")

// Getting all the command and event files

fs.readdir('./events/', (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log(`Event ingeladenn: ${file}`)
  });
});

client.commands = new Enmap();

fs.readdir('./commands/', (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith('.js')) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Commando ingeladen: ${commandName}.js`)
    client.commands.set(commandName, props);
  });
});

client.login(config.general.token);

console.log("Mikey is ready to begin")