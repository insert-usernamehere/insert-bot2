const { Command } = require('discord.js-commando');

module.exports = class randomstatus extends Command {
	constructor(client) {
		super(client, {
			name: 'randomstatus',
			group: 'control',
			memberName: 'randomstatus',
			description: 'change bots status randomly',
			ownerOnly: true,
		});
	}

	run(message, client) {
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
        const randomnumber = (getRandomInt(2001));
        if (randomnumber == 5) {
          this.client.user.setActivity("theres a 1 in 2000 chance that this is my status", { type: "PLAYING" })
        } else if (randomnumber > 1500) {
          this.client.user.setActivity("taking over the pasta land", { type: "PLAYING" })
        } else if (randomnumber < 30) {
          this.client.user.setActivity("none of your business", { type: "PLAYING" })
        } else if (randomnumber > 30) {
          this.client.user.setActivity("taking over the world", { type: "PLAYING" })
        }
        this.client.users.cache.get("666378959184855042").send(`randomized status`)
	}
};