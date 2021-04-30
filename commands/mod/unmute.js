const { Command } = require('discord.js-commando');

module.exports = class unmute extends Command {
	constructor(client) {
		super(client, {
			name: 'unmute',
			group: 'mod',
			memberName: 'unmute',
			description: 'unmute a bad member who served their time',
		});
	}

	async run(msg) {
        const Keyv = require('keyv');
        const udata = new Keyv('sqlite:database.sqlite');
        if (msg.guild.id != '732793772697583623') return;
        if (msg.member.roles.cache.find(r => r.name === "Macaroni Moderators")) {
          let unmutetarget1 = msg.mentions.users.first();
          let unmutetarget = unmutetarget1.id
          const unmutetarget2 = await msg.guild.members.fetch(unmutetarget);
          if (unmutetarget2.roles.cache.find(r => r.name === "Muted")) {
            msg.guild.members.cache.get(unmutetarget).roles.remove("757938528087965747");
            msg.guild.members.cache.get(unmutetarget).roles.add("732808275128483872");
            msg.guild.members.cache.get(unmutetarget).roles.add("757556192330514492");
            msg.guild.members.cache.get(unmutetarget).roles.add("732799191801397311");
            if (await udata.get('mp' + unmutetraget) == 1) {
              await udata.set('mp' + unmutetraget, 0);
              msg.guild.members.cache.get(unmutetraget).roles.add("789522361455345684");
            }
            msg.reply(`<@${unmutetarget}> has been unmuted`)
            var unmutereason = msg.content.split("").slice(30).join("")
            this.client.users.cache.get(unmutetarget).send(`you were unmuted in the pasta land by <@${msg.author.id}> for:${unmutereason}`).catch(msg.channel.send(`failed to dm user`))
          } else {
            msg.reply(`<@${unmutetarget}> is not currently mutted.`)
          }
        } else {
          msg.channel.send("you don't have enough power to do this come back when your more powerful")
        }
        return
      }

};