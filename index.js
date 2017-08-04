var Discord = require("discord.js");
var S = require('string');
var http = require('http');

 http.createServer(function (request, response) {

var client = new Discord.Client();

client.login("MzQyOTE2ODA4MTk1NTcxNzEz.DGWl3Q.pOKLqyCMRcru7OFWBVFwkvoOwpE");

client.Dispatcher.on(Events.GATEWAY_READY, e => {
console.log("Connected as: " + client.User.username);
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
if (S(e.message.content).startsWith("--setrank"))
{
	var sr = e.message.content.split(" ")[1];
	e.message.channel.sendMessage(sr);
}
else if (e.message.content == "ping")
{
	e.message.channel.sendMessage("pong");
}
});
 }).listen(process.env.PORT);