const commando = require('discord.js-commando');

class LeaveChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'Leaves the voice channel of the commander'
        });
    }

    async run(message, args)
    {
        
        if(message.guild.voiceConnection.channel == message.member.voiceChannel) {
            message.guild.voiceConnection.disconnect();
          }

        else

        {
            message.reply("You must be in a voice channel");
        }

        if(message.guild.disconnect == message.member.voiceChannel)
            message.member.voiceChannel.disconnect()
                message.reply("Successfully left!");
    }
}
module.exports = LeaveChannelCommand;