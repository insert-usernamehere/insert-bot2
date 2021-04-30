const { Command } = require('discord.js-commando');

module.exports = class dmsay extends Command {
	constructor(client) {
		super(client, {
			name: 'dmsay',
			group: 'control',
			memberName: 'dmsay',
			description: 'make the bot say somthing',
			ownerOnly: true,
		});
	}

	run(message) {
		const fs = require('fs')
		var say = message.content.split("dmsay ").join("")
		let rawsay = fs.readFileSync('./dmwillsay.json');
		let writesay = {
			say: `${say}`
		};
		let data = JSON.stringify(writesay);
      	fs.writeFileSync('./dmwillsay.json', data);
		return
	}
};