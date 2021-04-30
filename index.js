const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const fs = require('fs')
var cron = require("node-cron");

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

const client = new CommandoClient({
	commandPrefix: '.',
	owner: '666378959184855042',
});
client.nick = new Map();

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['mod', 'mods do stuff'],
		['control', 'insert only'],
		['user', 'commands you can run'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
	var randomnumber = (getRandomInt(2001));
	if (randomnumber == 5) {
	  client.user.setActivity("theres a 1 in 2000 chance that this is my status", { type: "PLAYING" })
	} else if (randomnumber > 1500) {
	  client.user.setActivity("taking over the pasta land", { type: "PLAYING" })
	} else if (randomnumber < 30) {
	  client.user.setActivity("none of your business", { type: "PLAYING" })
	} else if (randomnumber > 30) {
	  client.user.setActivity("taking over the world", { type: "PLAYING" })
	}
	cron.schedule('* 12 * * *', () => {
	  var randomnumber = (getRandomInt(2001));
	  if (randomnumber == 5) {
		client.user.setActivity("theres a 1 in 2000 chance that this is my status", { type: "PLAYING" })
	  } else if (randomnumber > 1500) {
		client.user.setActivity("taking over the pasta land", { type: "PLAYING" })
	  } else if (randomnumber < 30) {
		client.user.setActivity("none of your business", { type: "PLAYING" })
	  } else if (randomnumber > 30) {
		client.user.setActivity("taking over the world", { type: "PLAYING" })
	  }
	});
	console.log(`bot is up and running`)
});

client.on('message', message => {
	if (message.mentions.has(client.user)) {
	  if (message.author.id == client.user.id) return;
	  var messagecontent = message.cleanContent.split(" ").slice(0).join(" ")
	  client.users.cache.get("666378959184855042").send(`I have received a ping from ${message.author} in <#${message.channel.id}> saying: ${messagecontent}`)
	}
	if (message.channel.type == "dm") {
		if (message.author.id == 666378959184855042) return;
		if (message.author.id == client.user.id) return;
		var dmcontent = message.cleanContent.split(" ").slice(0).join(" ")
		client.users.cache.get("666378959184855042").send(`I got a dm from ${message.author} saying: ${dmcontent}`)
	}
});

client.on('message', async msg => {
	if (msg.author.id == 775441791117819905) return;
	if (msg.author.id == 239631525350604801) return;
	if (msg.author.id == 432610292342587392) return;
	if (msg.author.id == 794380049351966742) return;
	if (msg.content === "$wa") return;
	if (msg.content === "$im") return;
	if (msg.content === "$m") return;
	if (msg.content === "$mu") return;
	if (msg.content === "$ima") return;
	if (msg.content === "$p") return;
	if (msg.content === "$mg") return;
	if (msg.content === "$ma") return;
	if (msg.content === "$h") return;
	if (msg.content === "$hg") return;
	if (msg.content === "$ha") return;
	if (msg.content === "$w") return;
	if (msg.content === "$wg") return;
	if (msg.channel.id != "779060858449821716") {
	  const willuhhuh = (getRandomInt(97570));
	  if (willuhhuh > 200 && willuhhuh < 4000) {
		const maybeuhhuh = (getRandomInt(2294750));
		if (maybeuhhuh > 5000 && maybeuhhuh < 8000) {
		  msg.react('732807530190864485')
		} else if (maybeuhhuh > 200 && maybeuhhuh < 500) {
		  msg.react('760322838443196416')
		} else if (maybeuhhuh > 800 && maybeuhhuh < 123456) {
		  msg.react('⭐')
		} else if (maybeuhhuh > 123458 && maybeuhhuh < 272465) {
		  msg.react('837076499697631274')
		} else if (maybeuhhuh > 1596462 && maybeuhhuh < 2164963) {
		  msg.react('814695779628351488')
		}
	  }
	}
});

client.on('message', async msg => {
	if (msg.channel.id != "789142506738417665") return;
	if (msg.content.toLowerCase().startsWith("?poll")) {
	  await sleep(20);
	  msg.delete()
	}
});

client.on('guildMemberUpdate', (oldMember, newMember) => {
	if(newMember.nickname && oldMember.nickname !== newMember.nickname) {
	  if (client.nick.get(newMember.id) == null) {
		client.nick.set(newMember.id, 0);
	  }
	  if (client.nick.get(newMember.id) !== 0) {
		client.nick.set(newMember.id, 0);
	  } else {
		if (newMember.roles.cache.find(r => r.name === "no nickname changes")) {
		  client.nick.set(newMember.id, 1);
		  newMember.setNickname(oldMember.nickname)
		}
	  }
	}
});

client.on('presenceUpdate', (oldPresence, newPresence) => {
	if (newPresence.guild.id != '732793772697583623') return;
	let member = newPresence.member;
	if (member.id === '666378959184855042') {
	  if (newPresence.status === 'online') {
		client.channels.cache.get('824067984963141652').send('Insert opened discord what will he do');
	  }
	}
	if (member.id === '241715517042327562') {
	  if (newPresence.status === 'offline') {
		client.channels.cache.get('824067984963141652').send('The firey pits of hell itself have opened and spat out 3vango. Run.');
	  }
	}
	if (member.id === '544901224277999616') {
	  if (newPresence.status === 'online') {
		client.channels.cache.get('824067984963141652').send('fetts awake time to not die');
	  }
	}
	if (member.id === '682713876562706433') {
	  if (newPresence.status === 'online') {
		client.channels.cache.get('824067984963141652').send('Look who decided to join! Buckets online.');
	  }
	}
	if (member.id === '683248359322288152') {
	  if (newPresence.status === 'online') {
		client.channels.cache.get('824067984963141652').send('Oh look, the cat dragged in a rogue FBI!');
	  }
	}
	if (member.id === '603319344801251399') {
	  if (newPresence.status === 'online') {
		client.channels.cache.get('824067984963141652').send('Greenlog came out of his Forrest. Hide your cheese.');
	  }
	}
	if (member.id === '701148265202188418') {
	  if (newPresence.status === 'online') {
		client.channels.cache.get('824067984963141652').send('cat with no legs is using discord, how can he do it without legs');
	  }
	}
	if (member.id === '423548273358405632') {
	  if (newPresence.status === 'online') {
		client.channels.cache.get('824067984963141652').send('sploot is awake, hide your children');
	  }
	}
	if (member.id === '345959899097989121') {
	  if (newPresence.status === 'dnd') {
		client.channels.cache.get('824067984963141652').send('Misc is online. Prepare your OwOs.');
	  }
	}
	if (member.id === '241715517042327562') {
	  if (newPresence.status === 'online') {
		client.channels.cache.get('824067984963141652').send('The firey pits of hell itself have opened and spat out 3vango. Run.');
	  }
	}
	if (member.id === '654877061877465101') {
	  if (newPresence.status === 'online') {
		client.channels.cache.get('824067984963141652').send('oh peck, golem is here');
	  }
	}
});

client.login('NzUyMjUxMDU4OTA2MjAyMTQy.X1U6ZA.q85Qx9er_yNVXawWL2ObVWNsdEw');