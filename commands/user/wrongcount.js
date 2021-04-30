const { Command } = require('discord.js-commando');

module.exports = class wrongcount extends Command {
	constructor(client) {
		super(client, {
			name: 'wrongcount',
			group: 'user',
			memberName: 'wrongcount',
			description: 'check how wrong someone is',
		});
	}

	async run(msg) {
        const Keyv = require('keyv');
        const udata = new Keyv('sqlite:database.sqlite');
        if (msg.guild.id != '732793772697583623') return;
        let wronguserping = msg.mentions.users.first();
        let wronguser = wronguserping.id
        var dataa1 = await udata.get('w' + wronguser)
        if (dataa1 == null) {
          await udata.set('w' + wronguser, 0);
        }
        var dataa1 = await udata.get('w' + wronguser)
        msg.channel.send(`${wronguserping.username} has been wrong ${dataa1} times`) 
        return
      }

};