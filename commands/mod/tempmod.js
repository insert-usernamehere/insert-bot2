const { Command } = require('discord.js-commando');

module.exports = class tempmod extends Command {
	constructor(client) {
		super(client, {
			name: 'tempmod',
			group: 'mod',
			memberName: 'tempmod',
			description: 'give a memeber mod... for a little while',
		});
	}

	async run(msg) {
        const Keyv = require('keyv');
        const udata = new Keyv('sqlite:database.sqlite');
        var cron = require("node-cron");
        if (msg.guild.id != '732793772697583623') return;
        if (msg.member.roles.cache.find(r => r.name === "Macaroni Moderators")) {
          if (istempmod == 1) {
            msg.reply("a temp mod is already running due to discord and js limitations only one person can be a temp mod at a time.")
          } else {
            global.istempmod = 1;
            let tempmodtarget1 = msg.mentions.users.first();
            let tempmodtarget = tempmodtarget1.id
            const tempmodtarget2 = await msg.guild.members.fetch(tempmodtarget);
            if (tempmodtarget2.roles.cache.find(r => r.name === "Temp mod don’t get any ideas")) {
              msg.reply(`<@${tempmodtarget}> is already a temp mod`)
            } else {
              global.istempmod = 1;
              msg.guild.members.cache.get(tempmodtarget).roles.add("765945607394164756");
              msg.guild.members.cache.get(tempmodtarget).roles.add("766444560976576533");
              msg.reply(`<@${tempmodtarget}> is now a temp mod`)
              try {
                this.client.users.cache.get(tempmodtarget).send(`you were made a temp mod in the pasta land`).catch(msg.channel.send(`failed to dm user`))
              } catch(err) {
                msg.channel.send(`failed to dm user`)
              }
              var timecontent = msg.content.split("").slice(32).join("")
              var tempmod = cron.schedule(timecontent, () => {
                if (tempmodtarget2.roles.cache.find(r => r.name === "Temp mod don’t get any ideas")) {
                  msg.guild.members.cache.get(tempmodtarget).roles.remove("765945607394164756");
                }
                if (tempmodtarget2.roles.cache.find(r => r.name === "Moderators")) {
                  msg.guild.members.cache.get(tempmodtarget).roles.remove("766444560976576533");
                }
                global.istempmod = 0;
                this.client.users.cache.get(tempmodtarget).send(`your tempmod in the pastaland expired`).catch(console.log(`a fun error`))
                tempmod.stop();
              });
            }
          }
        } else {
          msg.channel.send("you don't have enough power to do this come back when your more powerful")
        }
      }

};