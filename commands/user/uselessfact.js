const { Command } = require('discord.js-commando');

module.exports = class uselessfact extends Command {
	constructor(client) {
		super(client, {
			name: 'uselessfact',
			group: 'user',
			memberName: 'uselessfact',
			description: 'get a useless fact',
		});
	}

	async run(msg) {
        const axios = require("axios");
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
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
        return
      }

};