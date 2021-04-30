const { Command } = require('discord.js-commando');

module.exports = class unlisce extends Command {
	constructor(client) {
		super(client, {
			name: 'unlisce',
			group: 'mod',
			memberName: 'unlisce',
			description: 'unlisce a bad member who serverd up their time',
		});
	}

	async run(msg) {
        const Keyv = require('keyv');
        const udata = new Keyv('sqlite:database.sqlite');
        if (msg.guild.id != '732793772697583623') return;
        if (msg.member.roles.cache.find(r => r.name === "Macaroni Moderators")) {
          let unliscetarget1 = msg.mentions.users.first();
          let unliscetraget = unliscetarget1.id
          const unliscetarget2 = await msg.guild.members.fetch(unliscetraget);
          if (unliscetarget2.roles.cache.find(r => r.name === "Penne Lisce")) {
            msg.guild.members.cache.get(unliscetraget).roles.remove("757540103404126229");
            msg.guild.members.cache.get(unliscetraget).roles.add("732808275128483872");
            msg.guild.members.cache.get(unliscetraget).roles.add("757556192330514492");
            msg.guild.members.cache.get(unliscetraget).roles.add("732799191801397311");
            if (await udata.get('lp' + unliscetraget) == 1) {
              await udata.set('lp' + unliscetraget, 0);
              msg.guild.members.cache.get(unliscetraget).roles.add("789522361455345684");
            }
            msg.reply(`<@${unliscetraget}> has been unlisced`)
            var unliscereason = msg.content.split("").slice(31).join("")
            this.client.users.cache.get(unliscetraget).send(`you were unlisced in the pasta land by <@${msg.author.id}> for:${unliscereason}`).catch(msg.channel.send(`failed to dm user`))
          } else {
            msg.reply(`<@${unliscetraget}> is not currently lisced.`)
          }
        } else {
          msg.channel.send("you don't have enough power to do this come back when your more powerful")
        }
        return
      }

};