const { Command } = require('discord.js-commando');

module.exports = class mute extends Command {
	constructor(client) {
		super(client, {
			name: 'mute',
			group: 'mod',
			memberName: 'mute',
			description: 'mute a bad member',
		});
	}

	async run(msg) {
        const Keyv = require('keyv');
        const udata = new Keyv('sqlite:database.sqlite');
        if (msg.guild.id != '732793772697583623') return;
        if (msg.member.roles.cache.find(r => r.name === "Macaroni Moderators")) {
          let mutetarget1 = msg.mentions.users.first();
          let mutetarget = mutetarget1.id
          const mutetarget2 = await msg.guild.members.fetch(mutetarget);
          if (mutetarget2.roles.cache.find(r => r.name === "Muted")) {
            msg.reply(`<@${mutetarget}> is already muted`)
          } else {
            msg.guild.members.cache.get(mutetarget).roles.add("757938528087965747");
            msg.reply(`<@${mutetarget}> is now muted`)
            if (mutetarget2.roles.cache.find(r => r.name === "Pasta Followers")) {
              msg.guild.members.cache.get(mutetarget).roles.remove("732808275128483872");
            }
            if (mutetarget2.roles.cache.find(r => r.name === "Buddies")) {
              msg.guild.members.cache.get(mutetarget).roles.remove("757556192330514492");
            }
            if (mutetarget2.roles.cache.find(r => r.name === "Penne Lisce")) {
              if (await udata.get('lp' + mutetraget) == 1) {
                await udata.set('lp' + mutetraget, 0);
                await udata.set('mp' + mutetraget, 1);
              }
              await udata.set('lp' + mutetarget, 0);
              msg.guild.members.cache.get(mutetarget).roles.remove("757540103404126229");
            }
            if (mutetarget2.roles.cache.find(r => r.name === "Pasta Lovers")) {
              msg.guild.members.cache.get(mutetarget).roles.remove("732799191801397311");
            }
            if (mutetarget2.roles.cache.find(r => r.name === "Pasta Poll Person")) {
              await udata.set('mp' + mutetarget, 1);
              msg.guild.members.cache.get(mutetarget).roles.remove("789522361455345684");
            }
            var mutereason = msg.content.split("").slice(28).join("")
            this.client.users.cache.get(mutetarget).send(`you were muted in the pasta land by <@${msg.author.id}> for:${mutereason}`).catch(msg.channel.send(`failed to dm user`))
          }
        } else {
          msg.channel.send("you don't have enough power to do this come back when your more powerful")
        }
        return
      }

};