const commando = require('discord.js-commando');
const discord = require('discord.js');

class VoiceChannelRules extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'vcrules',
            group: 'simple',
            memberName: 'vcrules',
            description: 'Voice Channel Rules command for Mr_Josh'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
            .addField("Rule #1:", "If someone is annoying you, you can use mute bottom on them, USE IT IF NECESSARY.", true)
            .addField("Rule #2:", "Don't spam the voice channels (joining,leaving,joining, ect...)", true)
            .addField("Rule #3:", "If you're planning on playing music, play it in the Music Voice Channel.", true)
            .addField("Rule #4:", "Use the correct voice channel for its intended purpose.", true)
            .setColor(0xFF0000)
            .setTitle("VOICE CHANNEL RULES")


            message.channel.send(myInfo)
    }
}

module.exports = VoiceChannelRules;