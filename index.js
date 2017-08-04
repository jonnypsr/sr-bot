var Discord = require("discordjs");
var S = require('string');
var http = require('http');

 http.createServer(function (request, response) {

var client = new Discord.Client();

client.login("MzQyOTE2ODA4MTk1NTcxNzEz.DGWl3Q.pOKLqyCMRcru7OFWBVFwkvoOwpE");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

 }).listen(process.env.PORT);