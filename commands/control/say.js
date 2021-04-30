const { Command } = require('discord.js-commando');

module.exports = class say extends Command {
	constructor(client) {
		super(client, {
			name: 'say',
			group: 'control',
			memberName: 'say',
			description: 'make the bot say somthing',
			ownerOnly: true,
		});
	}

	run(message) {
		const fs = require('fs')
		var say = message.content.split("say ").join("")
		let rawsay = fs.readFileSync('./willsay.json');
		let writesay = {
			say: `${say}`
		};
		let data = JSON.stringify(writesay);
      	fs.writeFileSync('./willsay.json', data);
		return
	}
};