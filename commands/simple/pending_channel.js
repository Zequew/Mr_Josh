const commando = require('discord.js-commando');
const discord = require('discord.js');

class PendingChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'pendingchannel',
            group: 'simple',
            memberName: 'pendingchannel',
            description: 'Pending Channel command for Mr_Josh'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
            .addField("INFO", "Please only tag a moderator ONCE for your role request. Spamming the moderator role will result in a warning, kick, or ban.", true)
            .addField("TO GET ROLE", "Say getrole", true)
            .setColor(0x228B22)
            .setTitle("Zequew®/Mr_Josh® | PENDING CHANNEL/ROLE REQUEST")
            .setDescription("Welcome to our server, please make sure to read #rules")


            message.channel.send(myInfo)
    }
}

module.exports = PendingChannelCommand;