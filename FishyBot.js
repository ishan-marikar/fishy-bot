var config = {
	channels: ["#dev-lk"],
	server: "irc.freenode.net",
	botName: "fishyBot"
};

// Load the library
var irc = require("irc");


// Create the bot
var bot = new irc.Client(config.server, config.botName, 
	{
		channels: config.channels
	});

// Greet them when they join the irc
bot.addListener("join", function(channel, who)
	{
		console.log("[*] " + who + " has joined the chat");
		// Welcome them! :3
		bot.say(channel, "Duude! :3 Hey there " + who + "!");
	});

bot.addListener("message", function (from, to, text, message) {	
	// Nothing is implemented yet.
	console.log("[*] " + from + " has sent me a message: " + text );
	bot.say(from , "My master hasn't implemented anything yet :c");
});
