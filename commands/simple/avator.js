const commando = require('discord.js-commando');

class AvatarCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'avatar',
            group: 'simple',
            memberName: 'avatar',
            description: 'Replies a picture of your discord pfp'
        });
    }

    async run(message, args)
    {
       if(!message.member.hasPermission("KICK_MEMBERS"))
         {
             message.channel.send("You do not have the previlage to kick!");
             return;
         }
        message.reply(message.author.avatarURL);

    }
}

module.exports = AvatarCommand;