const { Command } = require('discord.js-commando');

module.exports = class unmod extends Command {
	constructor(client) {
		super(client, {
			name: 'unmod',
			group: 'mod',
			memberName: 'unmod',
			description: 'unmod a no longer worthy member',
		});
	}

	async run(msg) {
        const Keyv = require('keyv');
        const udata = new Keyv('sqlite:database.sqlite');
        if (msg.guild.id != '732793772697583623') return;
        if (msg.member.roles.cache.find(r => r.name === "Rigatoni Rulers")) {
          let unmodtarget1 = msg.mentions.users.first();
          let unmodtarget = unmodtarget1.id
          const unmodtarget2 = await msg.guild.members.fetch(unmodtarget);
          if (unmodtarget2.roles.cache.find(r => r.name === "Macaroni Moderators")) {
            msg.guild.members.cache.get(unmodtarget).roles.remove("761295684497571872");
            if (unmodtarget2.roles.cache.find(r => r.name === "Moderators")) {
              msg.guild.members.cache.get(unmodtarget).roles.remove("766444560976576533");
            }
            if (unmodtarget2.roles.cache.find(r => r.name === "admin")) {
              msg.guild.members.cache.get(unmodtarget).roles.remove("802691333155586069");
            }
            msg.guild.members.cache.get(unmodtarget).roles.add("801605871107964958");
            msg.reply(`<@${unmodtarget}> is no longer a mod you may now laugh at them`)
            var unmodreason = msg.content.split("").slice(29).join("")
            this.client.users.cache.get(unmodtarget).send(`you were demodded in the pasta land by <@${msg.author.id}> for:${unmodreason}`).catch(msg.channel.send(`failed to dm user`))
          } else {
            msg.reply(`<@${unmodtarget}> is not a mod`)
          }
        } else {
          msg.channel.send("you don't have enough power to do this come back when your more powerful")
        }
        return
      }

};