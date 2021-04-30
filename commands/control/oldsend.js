const { Command } = require('discord.js-commando');

module.exports = class oldsend extends Command {
	constructor(client) {
		super(client, {
			name: 'oldsend',
			group: 'control',
			memberName: 'oldsend',
			description: 'make the bot send somthing',
			ownerOnly: true,
		});
	}
 
    run(message, client) {
		const fs = require('fs')
        let rawsend = fs.readFileSync('./channel.json');
        let send = JSON.parse(rawsend);
		let rawsay = fs.readFileSync('./willsay.json');
		let cansay = JSON.parse(rawsay);
		this.client.channels.cache.get(send.channel).send(cansay.say)
		return message.say(`message sent to <#${send.channel}> saying: ${cansay.say}`)
	}
};