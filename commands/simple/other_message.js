const commando = require('discord.js-commando');
const discord = require('discord.js');

class OtherMessage extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'othermessage',
            group: 'simple',
            memberName: 'othermessage',
            description: 'Other Message command for Mr_Josh'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
            .setDescription("**Mr_Josh is above the rules, no one else is above the rules except Mr_Josh!**")
            .setColor(0x228B22)
            .setTitle("OTHER")
            .setFooter("All rules are subject to change. YOU WILL BE NOTIFIED if a rule is changed.")


            message.channel.send(myInfo)
    }
}

module.exports = OtherMessage;