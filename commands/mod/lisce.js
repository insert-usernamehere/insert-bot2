const { Command } = require('discord.js-commando');

module.exports = class lisce extends Command {
	constructor(client) {
		super(client, {
			name: 'lisce',
			group: 'mod',
			memberName: 'lisce',
			description: 'lisce a bad member',
		});
	}

	async run(msg) {
        const Keyv = require('keyv');
        const udata = new Keyv('sqlite:database.sqlite');
        if (msg.guild.id != '732793772697583623') return;
        if (msg.member.roles.cache.find(r => r.name === "Macaroni Moderators")) {
          let liscetarget1 = msg.mentions.users.first();
          let liscetraget = liscetarget1.id
          const liscetarget2 = await msg.guild.members.fetch(liscetraget);
          if (liscetarget2.roles.cache.find(r => r.name === "lisce immunity")) {
            msg.reply(`<@${liscetraget}> has lisce immunity so they cannot be lisced.`)
          } else if (liscetarget2.roles.cache.find(r => r.name === "penne lisce pass")) {
            msg.reply(`<@${liscetraget}> has a penne lisce pass. The pass has been used`)
            msg.guild.members.cache.get(liscetraget).roles.remove("765916356029579264");
          } else if (liscetarget2.roles.cache.find(r => r.name === "Penne Lisce")) {
            msg.reply(`<@${liscetraget}> is already lisced`)
          } else {
            msg.guild.members.cache.get(liscetraget).roles.add("757540103404126229");
            msg.reply(`<@${liscetraget}> is now lisced`)
            var liscereason = msg.content.split("").slice(29).join("")
            if (liscetarget2.roles.cache.find(r => r.name === "Pasta Followers")) {
              msg.guild.members.cache.get(liscetraget).roles.remove("732808275128483872");
            }
            if (liscetarget2.roles.cache.find(r => r.name === "Buddies")) {
              msg.guild.members.cache.get(liscetraget).roles.remove("757556192330514492");
            }
            if (liscetarget2.roles.cache.find(r => r.name === "Muted")) {
              if (await udata.get('mp' + liscetraget) == 1) {
                await udata.set('lp' + liscetraget, 1);
                await udata.set('mp' + liscetraget, 0);
              }
              msg.guild.members.cache.get(liscetraget).roles.remove("757938528087965747");
            }
            if (liscetarget2.roles.cache.find(r => r.name === "Pasta Lovers")) {
              msg.guild.members.cache.get(liscetraget).roles.remove("732799191801397311");
            }
            if (liscetarget2.roles.cache.find(r => r.name === "Pasta Poll Person")) {
              await udata.set('lp' + liscetraget, 1);
              msg.guild.members.cache.get(liscetraget).roles.remove("789522361455345684");
            }
            this.client.users.cache.get(liscetraget).send(`you were lisced in the pasta land by <@${msg.author.id}> for:${liscereason}`).catch(msg.channel.send(`failed to dm user`))
          }
        } else {
          msg.channel.send("you don't have enough power to do this come back when your more powerful")
        }
        return
      }

};