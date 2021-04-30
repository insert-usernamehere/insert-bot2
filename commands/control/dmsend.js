const { Command } = require('discord.js-commando');

module.exports = class dmsend extends Command {
	constructor(client) {
		super(client, {
			name: 'dmsend',
			group: 'control',
			memberName: 'dmsend',
			description: 'make the bot send somthing',
			ownerOnly: true,
		});
	}
 
    run(message, client) {
		const fs = require('fs')
		var send = message.content.split("dmsend ").join("")
		let rawsay = fs.readFileSync('./dmwillsay.json');
		let cansay = JSON.parse(rawsay);
		this.client.users.cache.get(send).send(cansay.say)
		let writesay = {
			channel: `${send}`
		};
		let data = JSON.stringify(writesay);
      	fs.writeFileSync('./dmchannel.json', data);
		return message.say(`message sent to <@${send}> saying: ${cansay.say}`)
	}
};