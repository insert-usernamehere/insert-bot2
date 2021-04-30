const { Command } = require('discord.js-commando');

module.exports = class mod extends Command {
	constructor(client) {
		super(client, {
			name: 'mod',
			group: 'mod',
			memberName: 'mod',
			description: 'mod a worthy member',
		});
	}

	async run(msg) {
        const Keyv = require('keyv');
        const udata = new Keyv('sqlite:database.sqlite');
        if (msg.guild.id != '732793772697583623') return;
        if (msg.member.roles.cache.find(r => r.name === "Rigatoni Rulers")) {
          let modtarget1 = msg.mentions.users.first();
          let modtarget = modtarget1.id
          const modtarget2 = await msg.guild.members.fetch(modtarget);
          if (modtarget2.roles.cache.find(r => r.name === "Macaroni Moderators")) {
            msg.reply(`<@${modtarget}> is already a mod`)
          } else {
            msg.guild.members.cache.get(modtarget).roles.add("761295684497571872");
            msg.guild.members.cache.get(modtarget).roles.add("766444560976576533");
            if (modtarget2.roles.cache.find(r => r.name === "was once a mod")) {
              msg.guild.members.cache.get(modtarget).roles.remove("801605871107964958");
            }
            msg.reply(`<@${modtarget}> is now a mod welcome to the cool kids club`)
            var modreason = msg.content.split("").slice(27).join("")
            this.client.users.cache.get(modtarget).send(`you were modded in the pasta land by <@${msg.author.id}> for:${modreason}`).catch(msg.channel.send(`failed to dm user`))
            }
        } else {
          msg.channel.send("you don't have enough power to do this come back when your more powerful")
        }
        return
      }

};