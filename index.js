//--------------CONSTANT-------------//
//Librairie
const Discord = require("discord.js");
const config = require("./config.json");

//Client
const bot = new Discord.Client();
const client = bot

//Config
const token = config.token
const prefix = config.prefix
const MikadoID = config.MikadoID
const StrangerID = config.StrangerID

//Etat du bot
bot.on('ready', () => {
    console.log(`${bot.user.tag} est connecté !`);
    bot.user.setActivity(`N Σ Θ И - ${bot.guilds.get("508032671356813334").memberCount} Membres`, {type: "WATCHING"});
    
 });
bot.on("guildMemberAdd", member => {
    console.log(`${member.user.username} joined ${member.guild.name}. The guild has ${member.guild.memberCount} members!`);
    bot.user.setActivity(`N Σ Θ И - ${bot.guilds.get("508032671356813334").memberCount} Membres`, {type: "WATCHING"});  
});

bot.on("guildMemberRemove", member => {
    console.log(`${member.user.username} joined ${member.guild.name}. The guild has ${member.guild.memberCount} members!`);
    bot.user.setActivity(`N Σ Θ И - ${bot.guilds.get("508032671356813334").memberCount} Membres`, {type: "WATCHING"});  
});


 bot.on("message", async message => {

    if (!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "gimemyneonman") {
      if(message.author.id !== MikadoID) return;
      message.member.addRole(member.guild.roles.find("name", "N Σ Θ И"));
       }

    if (message.content.startsWith(prefix + "purge")) {

      let args = message.content.split(" ").slice(1);
      if(!message.member.hasPermission("MANAGE_MESSAGES")) {
          return message.reply('Vous n\'avez pas acces a cette commande')
           } else {
               message.channel.bulkDelete(args[0]).then(() => {
               message.channel.send(args[0] + " messages ont été effacés.").then(message => message.delete(5000));
         })
       }

    }



  if(message.content.startsWith(prefix + "ban")) {

    let args = message.content.split(" ").slice(1);

    if(!message.member.hasPermission("ADMINISTRATOR")) 
      return message.reply("Vous n'avez pas les autorisations pour utiliser ceci !");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Merci de mentionner un membre valide de ce serveur.");
    if(!member.bannable) 
      return message.reply("Je ne peux pas bannir cet utilisateur! Ont-ils un rôle plus élevé? Ai-je des autorisations d'interdiction ?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Aucune raison fournie";
    
    await member.ban(reason)
      .catch(error => message.reply(`Désolé ${message.author}, je ne peux pas bannir à cause de l'erreur suivante: ${error}`));
    message.reply(`${member.user.tag} a été interdit par ${message.author.tag}\nCar: ${reason}`);
  }

  if(message.content.startsWith(prefix + "kick")) {

    let args = message.content.split(" ").slice(1);

    if(!message.member.hasPermission("ADMINISTRATOR")) 
      return message.reply("Vous n'avez pas les autorisations pour utiliser ceci !");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Merci de mentionner un membre valide de ce serveur.");
    if(!member.kickable) 
      return message.reply("Je ne peux pas bannir cet utilisateur ! Ont-ils un rôle plus élevé ? Ai-je des autorisations d'interdiction ?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Aucune raison fournie";
    
    await member.kick(reason)
      .catch(error => message.reply(`Désolé ${message.author}, je ne peux pas kick à cause de l'erreur suivante: ${error}`));
    message.reply(`${member.user.tag} a été interdit par ${message.author.tag}\nCar: ${reason}`);
  }

  if(message.content.startsWith(prefix + "invitation")){
     message.channel.send("N'hésitez pas à inviter des gens sur **N Σ Θ И** ! :fire:\nhttps://discord.gg/uZ9cjBT")
  }

  if(message.content.startsWith(prefix + "pv")){
    let args = message.content.split(" ").slice(1);
    if (message.author.id !== MikadoID)
    if (message.author.id !== StrangerID)
     return message.reply("Vous n'avez pas les permissions d'utiliser cette commande.")
        if(message.deletable) message.delete();
        message.guild.members.forEach(member => {
              if(member.id === "459809420176654378")
              return;
               member.send(args.join(" "))
      })
    }

  });

  //bot.on('messageReactionAdd', (reaction, user, message) => {

    //if(reaction.emoji.name === "🔥")
      //if(reaction.author.id !== MikadoID)
      //if(reaction.author.id !== StrangerID)
      //return;
      //if(reaction.content !== "Ceci est un test") return;
     // bot.channels.get("508299538692308993").send(reaction.emoji.name + "Test accomplie avec succes" + reaction.emoji.name);

  //});


bot.login(process.env.TOKEN);
