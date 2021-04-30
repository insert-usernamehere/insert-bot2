const { Command } = require('discord.js-commando');

module.exports = class status extends Command {
	constructor(client) {
		super(client, {
			name: 'setstatus',
			group: 'control',
			memberName: 'status',
			description: 'change bots status',
			ownerOnly: true,
		});
	}

	run(message, client) {
        const newstatus = message.content.split("setstatus ").join("");
        this.client.user.setActivity(`${newstatus}`, { type: "PLAYING" })
		return message.say(`set status to ${newstatus}`);
	}
};