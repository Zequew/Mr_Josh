const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'NDk0OTkxMjQzNzM1MjAzODQw.DpPr2Q.DioJe9R7TOmOZovORrkHrUAEJ98'

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};

bot.on('message', function(message){
    if(message.content == 'Hello')
    {
        message.channel.sendMessage('Hello ' + message.author + ', how are you?');
    }
    if (message.content == "getrole") {
        let memberRole = message.guild.roles.find("name", "Verified");
        message.member.addRole(memberRole);
        let modRole = message.guild.roles.find("name", "Moderator");
        message.channel.send(`Done, ${modRole} remove this!`);
    }
});

bot.on('ready', function(){
    console.log("Ready");
})

bot.on("guildMemberAdd", function(member)
{
    member.send("Welcome to Zequew®/Mr_Josh®! If you haven't already heard, make sure to read #rules then say !join in #pending channel");
});

bot.login(TOKEN);