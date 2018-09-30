const commando = require('discord.js-commando');
const discord = require('discord.js');

class BotRulesCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'botrules',
            group: 'simple',
            memberName: 'botrules',
            description: 'Rules command for Mr_Josh'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
            .addField("Rule #1:", "Do not continuously or intentionally spam the bots with commands.", true)
            .addField("Rule #2:", "Keep NSFW/NSFK (Not safe for work/kids) content in the #nsfk room.", true)
            .addField("Rule #3:", "Do not attempt and break the bot in any way.", true)
            .addField("Rule #4:", "Use the #bot-room for commands always.", true)
            .setColor(0xFF0000)
            .setTitle("BOT RULES")


            message.channel.send(myInfo)
    }
}

module.exports = BotRulesCommand;