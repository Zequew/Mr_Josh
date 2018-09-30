const commando = require('discord.js-commando');
const discord = require('discord.js');

class NickNamePolicyCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'nicknamepolicy',
            group: 'simple',
            memberName: 'nicknamepolicy',
            description: 'Strike Policy command for Mr_Josh'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
            .addField("Rule #1:", "For breaking any of the rules resulting in a kick, you will be given 3 chances to return and try to change your actions. After the 3rd kick, and you breaking another rule, it will result in a ban.", true)
            .setColor(0xFF0000)
            .setTitle("NICKNAME POLICY")

            message.channel.send(myInfo)
    }
}

module.exports = NickNamePolicyCommand;