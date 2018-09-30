const commando = require('discord.js-commando');
const discord = require('discord.js');

class DiscordRulesCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'rules',
            group: 'simple',
            memberName: 'rules',
            description: 'Rules command for Mr_Josh'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
            .addField("Rule #1:", "Please have your Discord Nickname set to your ROBLOX Username at all times. It must be clearly visible for everyone to see. If you abuse the /nick privilege you will be kicked No abbreviations!", true)
            .addField("Rule #2:", "Please be respectful to everyone here. Do not treat someone differently based on race, sex, or religion!", true)
            .addField("Rule #3:", "This is an English speaking discord, so if you don't speak English GET OUT! And please keep relevant topics in their correct text channels.", true)
            .addField("Rule #4:", "Mic/Text spamming/@'ing spamming (making loud or continuous noises over the mic) is forbidden.", true)
            .addField("Rule #5:", "Do NOT set your 'playing' to anything innapropriote.", true)
            .addField("Rule #6:", "Targetting someone in order to provoke by any means is forbidden.", true)
            .addField("Rule #7:", "If you have background sounds / music going off on your mic, please either stop the noise, mute yourself, or turn on Push-To-Talk. Voice changers are also considerd annoying noises, so they are forbidden!", true)
            .addField("Rule #8:", "Do not argue on one of our text channels, thats what the #debate channel is for!", true)
            .addField("Rule #9:", "Shortened or bad links that look unfamiliar are not allowed.", true)
            .addField("Rule #10:", "Cursing is allowed but limited to mild language. Use of racist / sexist / other insulting curse words is not allowed at all.", true)
            .addField("Rule #11:", "Have appropriate profile pictures, they may not consist of pornography, gore, or have relations to a terrorist organization.", true)
            .addField("Rule #12:", "Play appropriate and legitimate music in the Music Channel.", true)
            .addField("Rule #13:", "No debate with someone by voice or text.", true)
            .addField("Rule #14:", "Do NOT try to bypass the censorship bot filter.", true)
            .setColor(0xFF0000)
            .setTitle("Discord Rules")
            .setDescription("The following rules are to be followed at all times during your time within our server. Breaking any of the rules may result in a warning, followed by a kick or ban depending on the serverity of the issue.")


            message.channel.send(myInfo)
    }
}

module.exports = DiscordRulesCommand;