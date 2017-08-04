var Discordie = require("discordie");
var Events = Discordie.Events;

var client = new Discordie();

client.connect({ token: "MzQyOTE2ODA4MTk1NTcxNzEz.DGWl3Q.pOKLqyCMRcru7OFWBVFwkvoOwpE" });

client.Dispatcher.on(Events.GATEWAY_READY, e => {
console.log("Connected as: " + client.User.username);
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
if (e.message.content == "ping")
e.message.channel.sendMessage("pong");
});