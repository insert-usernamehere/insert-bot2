const { Command } = require('discord.js-commando');

module.exports = class inspirobotquote extends Command {
	constructor(client) {
		super(client, {
			name: 'inspirobotquote',
			group: 'user',
			memberName: 'inspirobotquote',
			description: 'get a inspirobot quote',
		});
	}

	async run(msg) {
        const axios = require("axios");
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
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
        return
      }
};