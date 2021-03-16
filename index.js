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
var cron = require("node-cron");
const moment = require("moment");
global.istempmod = 0;
client.setMaxListeners(0);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


client.on('ready', () => {
  const randomnumber = (getRandomInt(2001));
  if (randomnumber == 5) {
    client.user.setActivity("theres a 1 in 2000 chance that this is my status", { type: "PLAYING"})
  } else if (randomnumber > 1500) {
    client.user.setActivity("taking over the pasta land", { type: "PLAYING"})
  } else if (randomnumber < 30) {
    client.user.setActivity("none of your business", { type: "PLAYING"})
  } else if (randomnumber > 30) {
  client.user.setActivity("taking over the world", { type: "PLAYING"})
}
	console.log('bot is up and running');
});

client.on("message", async msg => {
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
    const newstatus = message.content.split("setstatus ").join("");
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
      var liscereason =  msg.content.split("").slice(29).join("")
      client.users.cache.get(liscetraget).send(`you were lisced in the pasta land by <@${msg.author.id}> for:${liscereason}`)
      if(liscetarget2.roles.cache.find(r => r.name === "Pasta Followers")) {
        msg.guild.members.cache.get(liscetraget).roles.remove("732808275128483872");
      } 
      if(liscetarget2.roles.cache.find(r => r.name === "Buddies")) {
        msg.guild.members.cache.get(liscetraget).roles.remove("757556192330514492");
      } 
      if(liscetarget2.roles.cache.find(r => r.name === "Muted")) {
        msg.guild.members.cache.get(liscetraget).roles.remove("757938528087965747");
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
        var unliscereason =  msg.content.split("").slice(31).join("")
        client.users.cache.get(unliscetraget).send(`you were unlisced in the pasta land by <@${msg.author.id}> for:${unliscereason}`)
      } else {
        msg.reply(`<@${unliscetraget}> is not currently lisced.`)
    }
    } else {
      msg.channel.send("you don't have enough power to do this come back when your more powerful")
     }
  }
});

client.on('message', async msg => {
  if (msg.content.startsWith(".mute")) {
    if(msg.member.roles.cache.find(r => r.name === "Macaroni Moderators")) {
      let mutetarget1 = msg.mentions.users.first();
      let mutetarget = mutetarget1.id
      const mutetarget2 = await msg.guild.members.fetch(mutetarget);
      if(mutetarget2.roles.cache.find(r => r.name === "Muted")) {
        msg.reply(`<@${mutetarget}> is already muted`)
      } else {
      msg.guild.members.cache.get(mutetarget).roles.add("757938528087965747");
      msg.reply(`<@${mutetarget}> is now muted`)
      if(mutetarget2.roles.cache.find(r => r.name === "Pasta Followers")) {
        msg.guild.members.cache.get(mutetarget).roles.remove("732808275128483872");
      } 
      if(mutetarget2.roles.cache.find(r => r.name === "Buddies")) {
        msg.guild.members.cache.get(mutetarget).roles.remove("757556192330514492");
      } 
      if(mutetarget2.roles.cache.find(r => r.name === "Penne Lisce")) {
        msg.guild.members.cache.get(mutetarget).roles.remove("757540103404126229");
      } 
      if(mutetarget2.roles.cache.find(r => r.name === "Pasta Lovers")) {
        msg.guild.members.cache.get(mutetarget).roles.remove("732799191801397311");
      }
      var mutereason =  msg.content.split("").slice(28).join("")
      client.users.cache.get(mutetarget).send(`you were muted in the pasta land by <@${msg.author.id}> for:${mutereason}`)
    }
    } else {
      msg.channel.send("you don't have enough power to do this come back when your more powerful")
     }
  }
});

client.on('message', async msg => {
  if (msg.content.startsWith(".tempmod")) {
    if(msg.member.roles.cache.find(r => r.name === "Macaroni Moderators")) {
      if (istempmod == 1) {
        msg.reply("a temp mod is already running due to discord and js limitations only one person can be a temp mod at a time.")
      } else {
        global.istempmod = 1;
         let tempmodtarget1 = msg.mentions.users.first();
         let tempmodtarget = tempmodtarget1.id
         const tempmodtarget2 = await msg.guild.members.fetch(tempmodtarget);
         if(tempmodtarget2.roles.cache.find(r => r.name === "Temp mod don’t get any ideas")) {
          msg.reply(`<@${tempmodtarget}> is already a temp mod`)
        } else {
          global.istempmod = 1;
          msg.guild.members.cache.get(tempmodtarget).roles.add("765945607394164756");
          msg.guild.members.cache.get(tempmodtarget).roles.add("766444560976576533");
          msg.reply(`<@${tempmodtarget}> is now a temp mod`)
          client.users.cache.get(tempmodtarget).send(`you were made a temp mod in the pasta land`)
          var timecontent =  msg.content.split("").slice(32).join("")
          var tempmod = cron.schedule(timecontent, () => {
            if(tempmodtarget2.roles.cache.find(r => r.name === "Temp mod don’t get any ideas")) {
              msg.guild.members.cache.get(tempmodtarget).roles.remove("765945607394164756");
            }
            if(tempmodtarget2.roles.cache.find(r => r.name === "Moderators")) {
              msg.guild.members.cache.get(tempmodtarget).roles.remove("766444560976576533");
            }
            client.users.cache.get(tempmodtarget).send(`your tempmod in the pastaland expired`)
            global.istempmod = 0;
            tempmod.stop();
          });
        }
        }
      } else {
        msg.channel.send("you don't have enough power to do this come back when your more powerful")
      }
  }
});

client.on('message', async msg => {
  if (msg.content.startsWith(".mod")) {
    if(msg.member.roles.cache.find(r => r.name === "Rigatoni Rulers")) {
      let modtarget1 = msg.mentions.users.first();
      let modtarget = modtarget1.id
      const modtarget2 = await msg.guild.members.fetch(modtarget);
      if(modtarget2.roles.cache.find(r => r.name === "Macaroni Moderators")) {
        msg.reply(`<@${modtarget}> is already a mod`)
      } else {
      msg.guild.members.cache.get(modtarget).roles.add("761295684497571872");
      msg.guild.members.cache.get(modtarget).roles.add("766444560976576533");
      if(modtarget2.roles.cache.find(r => r.name === "was once a mod")) {
        msg.guild.members.cache.get(modtarget).roles.remove("801605871107964958");
        }
      msg.reply(`<@${modtarget}> is now a mod welcome to the cool kids club`)
      var modreason =  msg.content.split("").slice(27).join("")
      client.users.cache.get(modtarget).send(`you were modded in the pasta land by <@${msg.author.id}> for:${modreason}`)
    }
    } else {
      msg.channel.send("you don't have enough power to do this come back when your more powerful")
     }
  }
});

client.on('message', async msg => {
  if (msg.content.startsWith(".unmod")) {
    if(msg.member.roles.cache.find(r => r.name === "Rigatoni Rulers")) {
      let unmodtarget1 = msg.mentions.users.first();
      let unmodtarget = unmodtarget1.id
      const unmodtarget2 = await msg.guild.members.fetch(unmodtarget);
      if(unmodtarget2.roles.cache.find(r => r.name === "Macaroni Moderators")) {
        msg.guild.members.cache.get(unmodtarget).roles.remove("761295684497571872");
        if(unmodtarget2.roles.cache.find(r => r.name === "Moderators")) {
          msg.guild.members.cache.get(unmodtarget).roles.remove("766444560976576533");
        }
        if(unmodtarget2.roles.cache.find(r => r.name === "admin")) {
          msg.guild.members.cache.get(unmodtarget).roles.remove("802691333155586069");
        }
        msg.guild.members.cache.get(unmodtarget).roles.add("801605871107964958");
        msg.reply(`<@${unmodtarget}> is no longer a mod you may now laugh at them`)
        var unmodreason =  msg.content.split("").slice(29).join("")
        client.users.cache.get(unmodtarget).send(`you were demodded in the pasta land by <@${msg.author.id}> for:${unmodreason}`)
      } else {
      msg.reply(`<@${unmodtarget}> is not a mod`)
    }
    } else {
      msg.channel.send("you don't have enough power to do this come back when your more powerful")
     }
  }
});

client.on('message', async msg => {
  if (msg.content.startsWith(".unmute")) {
    if(msg.member.roles.cache.find(r => r.name === "Macaroni Moderators")) {
      let unmutetarget1 = msg.mentions.users.first();
      let unmutetarget = unmutetarget1.id
      const unmutetarget2 = await msg.guild.members.fetch(unmutetarget);
      if(unmutetarget2.roles.cache.find(r => r.name === "Muted")) {
        msg.guild.members.cache.get(unmutetarget).roles.remove("757938528087965747");
        msg.guild.members.cache.get(unmutetarget).roles.add("732808275128483872");
        msg.guild.members.cache.get(unmutetarget).roles.add("757556192330514492");
        msg.guild.members.cache.get(unmutetarget).roles.add("732799191801397311");
        msg.reply(`<@${unmutetarget}> has been unmuted`)
        var unmutereason =  msg.content.split("").slice(30).join("")
        client.users.cache.get(unmutetarget).send(`you were unmuted in the pasta land by <@${msg.author.id}> for:${unmutereason}`)
      } else {
        msg.reply(`<@${unmutetarget}> is not currently mutted.`)
    }
    } else {
      msg.channel.send("you don't have enough power to do this come back when your more powerful")
     }
  }
});

client.on('message', async msg => {
  if(msg.author.id == 775441791117819905) return;
  if(msg.author.id == 239631525350604801) return;
  if(msg.author.id == 432610292342587392) return;
  if (msg.channel.id != "779060858449821716") {
    const willuhhuh = (getRandomInt(67570));
    if (willuhhuh > 200 && willuhhuh < 4000) {
      const maybeuhhuh = (getRandomInt(294050));
      if (maybeuhhuh > 5000 && maybeuhhuh < 8000) {
        msg.channel.send("<:uhhuh:732807530190864485>")
      } else if (maybeuhhuh > 200 && maybeuhhuh < 500) {
        msg.channel.send("<:uuhhh:760322838443196416>")
      }
    }
  }
});

client.on('message', async msg => {
  if (msg.content === "how long until splatoon 3") {
    let splat3 = moment("20221218", "YYYYMMDD").fromNow();
    msg.channel.send(`possibly ${splat3}`)
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
		if (newPresence.status === 'offline') {
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
