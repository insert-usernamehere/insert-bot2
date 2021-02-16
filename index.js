const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);

const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require("axios");
var cron = require("cron");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


client.on('ready', () => {
  client.user.setActivity("taking over the world", { type: "PLAYING"})
	console.log('bot is up and running');
});

client.on("message", async msg => {
  if (msg.content.startsWith("insert")) {
   if(msg.author.id != 666378959184855042) return;
   const sayMessage = msg.content.split("insert").join(" ");
   msg.delete();
   msg.channel.send(sayMessage)
};
  if (msg.content.startsWith("say")) {
   if(msg.author.id != 666378959184855042) return;
    global.dmmessage = msg.content.split("say").join(" ");
};
  if (msg.content.startsWith("send")) {
   if(msg.author.id != 666378959184855042) return;
   global.dmchannel = msg.content.split("send ").join("");
   client.channels.cache.get(dmchannel).send(dmmessage);
   client.users.cache.get("666378959184855042").send(`message sent to <#${dmchannel}> saying:${dmmessage}`)
};
  if (msg.content.startsWith("oldsend")) {
   if(msg.author.id != 666378959184855042) return;
   client.channels.cache.get(dmchannel).send(dmmessage);
   client.users.cache.get("666378959184855042").send(`message sent to <#${dmchannel}> saying:${dmmessage}`)
};
  if (msg.content.startsWith("dmsay")) {
   if(msg.author.id != 666378959184855042) return;
    global.dmdmmessage = msg.content.split("dmsay").join(" ");
};
  if (msg.content.startsWith("dmsend")) {
   if(msg.author.id != 666378959184855042) return;
   global.dmdmchannel = msg.content.split("dmsend ").join("");
   client.users.cache.get(dmdmchannel).send(dmdmmessage);
   client.users.cache.get("666378959184855042").send(`dm sent to <@${dmdmchannel}> saying:${dmdmmessage}`)
};
  if (msg.content.startsWith("olddmsend")) {
   if(msg.author.id != 666378959184855042) return;
   client.users.cache.get(dmdmchannel).send(dmdmmessage);
   client.users.cache.get("666378959184855042").send(`dm sent to <@${dmdmchannel}> saying:${dmdmmessage}`)
};
  if (msg.content === "useless fact") {
      const randomnumber = (getRandomInt(1001));
      if (randomnumber < 500) {
        let getJoke = async () => {
          let response = await axios.get(
            "https://useless-facts.sameerkumar.website/api"
          );
          let joke = response.data;
          return joke;
        };
        let jokeValue = await getJoke();
        console.log(jokeValue);
        msg.channel.send(`here's a fact: ${jokeValue.data}`);
      } else {
        let getFact = async () => {
          let response = await axios.get(
            "https://uselessfacts.jsph.pl/random.json?language=en"
          );
          let fact = response.data;
          return fact;
        };
        let factValue = await getFact();
        console.log(factValue);
        msg.channel.send(`here's a fact: ${factValue.text}`);
      }
    
    }
  if (msg.content === "inspirobot quote") { 
      let getinsp = async () => {
        let response = await axios.get(
          "https://inspirobot.me/api?generate=true"
          );
          let insp = response.data;
          return insp;
        };
        let inspValue = await getinsp();
        console.log(inspValue);
        msg.channel.send(`${inspValue}`);
  }
  
})


client.on('message', message => { 
   if (message.mentions.has(client.user)) { 
     if(message.author.id == 775441791117819905) return;
     var messagecontent =  message.cleanContent.split(" ").slice(0).join(" ")
      client.users.cache.get("666378959184855042").send(`I have received a ping from ${message.author} in <#${message.channel.id}> saying: ${messagecontent}`)
   }
   if (message.content.startsWith("setstatus")) {
    if(message.author.id != 666378959184855042) return;
    const newstatus = message.content.split("setstatus ").join(" ");
    client.user.setActivity(`${newstatus}`, { type: "PLAYING"})
    client.users.cache.get("666378959184855042").send(`status set to${newstatus}`)
  }
  if(message.channel.type == "dm") {
    if(message.author.id == 666378959184855042) return;
    if(message.author.id == 775441791117819905) return;
    var dmcontent =  message.cleanContent.split(" ").slice(0).join(" ")
    client.users.cache.get("666378959184855042").send(`I got a dm from ${message.author} saying: ${dmcontent}`)
  }
});

client.on('message', async msg => {
  if (msg.content.startsWith(".lisce")) {
    if(msg.member.roles.cache.find(r => r.name === "Macaroni Moderators")) {
      let liscetarget1 = msg.mentions.users.first();
      let liscetraget = liscetarget1.id
      const liscetarget2 = await msg.guild.members.fetch(liscetraget);
      if(liscetarget2.roles.cache.find(r => r.name === "lisce immunity")) {
        msg.reply(`<@${liscetraget}> has lisce immunity so they cannot be lisced.`)
      } else if(liscetarget2.roles.cache.find(r => r.name === "penne lisce pass")) {
        msg.reply(`<@${liscetraget}> has a penne lisce pass. The pass has been used`)
        msg.guild.members.cache.get(liscetraget).roles.remove("765916356029579264");
      } else if(liscetarget2.roles.cache.find(r => r.name === "Penne Lisce")) {
        msg.reply(`<@${liscetraget}> is already lisced`)
      } else {
      msg.guild.members.cache.get(liscetraget).roles.add("757540103404126229");
      msg.reply(`<@${liscetraget}> is now lisced`)
      if(liscetarget2.roles.cache.find(r => r.name === "Pasta Followers")) {
        msg.guild.members.cache.get(liscetraget).roles.remove("732808275128483872");
      } 
      if(liscetarget2.roles.cache.find(r => r.name === "Buddies")) {
        msg.guild.members.cache.get(liscetraget).roles.remove("757556192330514492");
      } 
      if(liscetarget2.roles.cache.find(r => r.name === "Pasta Lovers")) {
        msg.guild.members.cache.get(liscetraget).roles.remove("732799191801397311");
      }
    }
    } else {
      msg.channel.send("you don't have enough power to do this come back when your more powerful")
     }
  }
});

client.on('message', async msg => {
  if (msg.content.startsWith(".unlisce")) {
    if(msg.member.roles.cache.find(r => r.name === "Macaroni Moderators")) {
      let unliscetarget1 = msg.mentions.users.first();
      let unliscetraget = unliscetarget1.id
      const unliscetarget2 = await msg.guild.members.fetch(unliscetraget);
      if(unliscetarget2.roles.cache.find(r => r.name === "Penne Lisce")) {
        msg.guild.members.cache.get(unliscetraget).roles.remove("757540103404126229");
        msg.guild.members.cache.get(unliscetraget).roles.add("732808275128483872");
        msg.guild.members.cache.get(unliscetraget).roles.add("757556192330514492");
        msg.guild.members.cache.get(unliscetraget).roles.add("732799191801397311");
        msg.reply(`<@${unliscetraget}> has been unlisced`)
      } else {
        msg.reply(`<@${unliscetraget}> is not currently lisced.`)
    }
    } else {
      msg.channel.send("you don't have enough power to do this come back when your more powerful")
     }
  }
});

client.on('presenceUpdate', (oldPresence, newPresence) => {
	let member = newPresence.member;
	if (member.id === '666378959184855042') {
		if (newPresence.status === 'online') {
			client.channels.cache.get('775416029429366854').send('Insert opened discord what will he do');
		}
	}
  if (member.id === '241715517042327562') {
		if (newPresence.status === 'online') {
			client.channels.cache.get('775890270104715264').send('The firey pits of hell itself have opened and spat out 3vango. Run.');
		}
	}
  if (member.id === '544901224277999616') {
		if (newPresence.status === 'online') {
			client.channels.cache.get('775876460472827934').send('fetts awake time to not die');
		}
	}
  if (member.id === '682713876562706433') {
		if (newPresence.status === 'online') {
			client.channels.cache.get('776911204089724939').send('Look who decided to join! Buckets online.');
		}
	}
  if (member.id === '683248359322288152') {
		if (newPresence.status === 'online') {
			client.channels.cache.get('775876408866111509').send('Oh look, the cat dragged in a rogue FBI!');
		}
	}
  if (member.id === '603319344801251399') {
		if (newPresence.status === 'online') {
			client.channels.cache.get('789489128747958294').send('Greenlog came out of his Forrest. Hide your cheese.');
		}
	}
  if (member.id === '701148265202188418') {
		if (newPresence.status === 'online') {
			client.channels.cache.get('785229828663934996').send('cat with no legs is using discord, how can he do it without legs');
		}
	}
  if (member.id === '423548273358405632') {
		if (newPresence.status === 'online') {
			client.channels.cache.get('775880905994010644').send('sploot is awake, hide your children');
		}
	}
  if (member.id === '345959899097989121') {
		if (newPresence.status === 'dnd') {
			client.channels.cache.get('775882929439244298').send('Misc is online. Prepare your OwOs.');
		}
	}
  if (member.id === '241715517042327562') {
		if (newPresence.status === 'online') {
			client.channels.cache.get('775890270104715264').send('The firey pits of hell itself have opened and spat out 3vango. Run.');
		}
	}
    if (member.id === '654877061877465101') {
		if (newPresence.status === 'online') {
			client.channels.cache.get('811279561034694697').send('oh peck, golem is here');
		}
	}
});


client.login(process.env.TOKEN);
