const { Command } = require('discord.js-commando');

module.exports = class math extends Command {
	constructor(client) {
		super(client, {
			name: 'math',
			group: 'user',
			memberName: 'math',
			description: 'make the bot do math',
		});
	}

	run(message) {
        const calc = require('mathjs');
        var mathe =  message.content.split("").slice(6).join("")
        var math =  calc.evaluate(mathe)
        var mathd = math.toFixed(5);
        message.channel.send(`\`${mathe}\` equals \`${mathd}\``)
		return
	}
};