var config = {
	channels: ["#dev-lk"],
	server: "irc.freenode.net",
	botName: "fishyBot"
};

// Load the library
var irc = require('irc');

// create the bot
var bot = new irc.Client(config.server, config.botName, 
	{
		channels: config.channels
	});

bot.addListener("join", function(channel, who)
	{
		// Welcome them! :3
		bot.say(channel, "Duude! :3 Hey there " + who + " !");
	});

bot.addListener("message", function (from, to, text, message) {	
	// Nothing is implemented yet.
	bot.say(from, "My master hasn't implemented anything yet :c");
});
