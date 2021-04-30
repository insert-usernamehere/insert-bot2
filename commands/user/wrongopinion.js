const { Command } = require('discord.js-commando');

module.exports = class wrongopinion extends Command {
	constructor(client) {
		super(client, {
			name: 'wrongopinion',
			group: 'user',
			memberName: 'wrongopinion',
			description: 'someone is wrong, so lets laugh at them',
		});
	}

	async run(msg) {
        const Keyv = require('keyv');
        const udata = new Keyv('sqlite:database.sqlite');
        if (msg.guild.id != '732793772697583623') return;
        if (msg.member.roles.cache.find(r => r.name === "Buddies")) {
            let wronguserping = msg.mentions.users.first();
            let wronguser = wronguserping.id
            if (msg.author.id === wronguserping.id) return;
            var dataa1 = await udata.get('w' + wronguser)
            if (dataa1 == null) {
            await udata.set('w' + wronguser, 0);
        }
            var dataa1 = await udata.get('w' + wronguser)
            var newdata = ++dataa1
            await udata.set('w' + wronguser, newdata);
            let data = await udata.get('w' + wronguser)
            msg.channel.send(`<@${wronguser}> is wrong their counter is now at ${data}`)
        }
        return
	}
};