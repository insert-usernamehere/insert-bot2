const { Command } = require('discord.js-commando');

module.exports = class send extends Command {
	constructor(client) {
		super(client, {
			name: 'send',
			group: 'control',
			memberName: 'send',
			description: 'make the bot send somthing',
			ownerOnly: true,
		});
	}
 
    run(message, client) {
		const fs = require('fs')
		var send = message.content.split("send ").join("")
		let rawsay = fs.readFileSync('./willsay.json');
		let cansay = JSON.parse(rawsay);
		this.client.channels.cache.get(send).send(cansay.say)
		let writesay = {
			channel: `${send}`
		};
		let data = JSON.stringify(writesay);
      	fs.writeFileSync('./channel.json', data);
		return message.say(`message sent to <#${send}> saying: ${cansay.say}`)
	}
};