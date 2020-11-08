const Discord = require("discord.js");
const  client = new Discord.Client();

const config = require("./config.json")

function presence(){
    client.user.setPresence({
        status:"dnd",
        activity: {
            name:"Con la hermana de diaz",
            type: "PLAYING"
        }
    })
}
client.on("ready", () => {
   console.log("Estoy listo!");
   presence();
});

let prefix = config.prefix;

client.on("message", (message) => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
/////////linea de codigo
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
if(command === "erik"){
    message.channel.send("Prendio El Masss capitooo |@everyone| https://www.twitch.tv/guselan")
}
});


client.on("message", message =>{
    if(message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  //comandos
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase(); 
   
    ///embeds/////
  if(command === 'serverinfo1'){
   const embed = new Discord.MessageEmbed()
      .setTitle('Información del servidor')
      .setColor("RANDOM")
      .setDescription('Información actual del servidor')
      .addField('Nombre del servidor', message.guild.name, true)
      .addField('Integrantes', message.guild.memberCount, true)
      .setAuthor(client.user.username, client.user.avatarURL())
      .setThumbnail('https://media.giphy.com/media/dahnt6nqwan1S/giphy.gif')
      .setImage('https://cdn.todamateria.com/imagenes/informacion-og.jpg')
      .setFooter('Solicitado por: '+message.member.displayName, message.author.avatarURL())
      .setTimestamp()
      .setURL('https://www.youtube.com/channel/UCa6KCEgU2DaXM0U5QCNcTeA');
      //NOMBRE DEL BOT: client.user.username
      //AVALAR DE BOT: client.user.avatarURL()
      //NOMBRE DE USUARIO: message.member.displayName
      //AVATAR DE USUARIO: message.author.avatarURL()
    message.channel.send(embed);
   
   
  }

  if(command === 'among'){
   const embed = new Discord.MessageEmbed()
      .setTitle('SALE UN AMONGUS?')
      .setColor("RANDOM")
      .setFooter('Version 1.0 (developed by LAUT1K)')
      .setAuthor(client.user.username, client.user.avatarURL())
      .setTimestamp()
      .setThumbnail('https://media1.tenor.com/images/2293721fac5a0a90df02d780f9809de9/tenor.gif?itemid=18582935')
      //NOMBRE DEL BOT: client.user.username
      //AVALAR DE BOT: client.user.avatarURL()
      //NOMBRE DE USUARIO: message.member.displayName
      //AVATAR DE USUARIO: message.author.avatarURL()
      message.channel.send("@everyone")
    message.channel.send(embed);
   
   
  }

if(command === 'cs'){
 const embed = new Discord.MessageEmbed()
    .setTitle('SALE UN CSGO?')
    .setColor("RANDOM")
    .setFooter('Version 1.0 (developed by LAUT1K)')
    .setAuthor(client.user.username, client.user.avatarURL())
    .setTimestamp()
    .setThumbnail('https://media1.tenor.com/images/1cdf8000b8463456b8c871c33d9ddfc7/tenor.gif?itemid=4690411')
    //NOMBRE DEL BOT: client.user.username
    //AVALAR DE BOT: client.user.avatarURL()
    //NOMBRE DE USUARIO: message.member.displayName
    //AVATAR DE USUARIO: message.author.avatarURL()
    message.channel.send("@everyone")
  message.channel.send(embed);
 
 
}

if(command === 'codelauty'){
 const embed = new Discord.MessageEmbed()
    .setTitle('Este es el codigo de CSGO de LAUT1K')
    .setColor("RANDOM")
    .setDescription("**Codigo de invitación de LAUT1K:** `AT5CT-CXSE`")
    .setThumbnail("Solicitado por:",message.member.displayName)
    .setFooter("solicitado por: " +message.member.displayName, message.author.avatarURL)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setTimestamp()
    .setThumbnail('https://media1.tenor.com/images/1cdf8000b8463456b8c871c33d9ddfc7/tenor.gif?itemid=4690411')
    //NOMBRE DEL BOT: client.user.username
    //AVALAR DE BOT: client.user.avatarURL()
    //NOMBRE DE USUARIO: message.member.displayName
    //AVATAR DE USUARIO: message.author.avatarURL()
    message.channel.send("**Code del puto de lauty**")
  message.channel.send(embed);
 
 
}

if(command === 'danubb'){
 const embed = new Discord.MessageEmbed()
    .setTitle('Este es Danu Chiquito -------->')
    .setColor("RANDOM")
    .setDescription("**Danu chiquito xd xd**")
    .setThumbnail("Solicitado por:",message.member.displayName)
    .setFooter("solicitado por: " +message.member.displayName, message.author.avatarURL)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setImage('https://cdn.discordapp.com/attachments/743078298342523023/774838997683929098/IMG-20201108-WA0001.jpg')
    .setTimestamp()
    .setThumbnail('https://cdn.discordapp.com/attachments/743078298342523023/774838997683929098/IMG-20201108-WA0001.jpg')
    //NOMBRE DEL BOT: client.user.username
    //AVALAR DE BOT: client.user.avatarURL()
    //NOMBRE DE USUARIO: message.member.displayName
    //AVATAR DE USUARIO: message.author.avatarURL()
    message.channel.send("Para Xferiabb")
  message.channel.send(embed);
 
 
}

if(command === 'danunobb'){
 const embed = new Discord.MessageEmbed()
    .setTitle('Este es Danu No tan Chiquito -------->')
    .setColor("RANDOM")
    .setDescription("**Danu No tan chiquito y tatuado xd xd**")
    .setThumbnail("Solicitado por:",message.member.displayName)
    .setFooter("solicitado por: " +message.member.displayName, message.author.avatarURL)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setImage('https://cdn.discordapp.com/avatars/547920872825159683/ae467a2cc73b132c11931590b91ec14f.png?size=1024')
    .setTimestamp()
    .setThumbnail('https://cdn.discordapp.com/avatars/547920872825159683/ae467a2cc73b132c11931590b91ec14f.png?size=1024')
    //NOMBRE DEL BOT: client.user.username
    //AVALAR DE BOT: client.user.avatarURL()
    //NOMBRE DE USUARIO: message.member.displayName
    //AVATAR DE USUARIO: message.author.avatarURL()
    message.channel.send("Mira este Putaso")
  message.channel.send(embed);
 
 
}

if(command === 'danuconmiedo'){
 const embed = new Discord.MessageEmbed()
    .setTitle('Este es Danu con miedo -------->')
    .setColor("RANDOM")
    .setDescription("**Danu con miedo a ser tackleado xd xd xd**")
    .setThumbnail("Solicitado por:",message.member.displayName)
    .setFooter("solicitado por: " +message.member.displayName, message.author.avatarURL)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setImage('https://scontent.feze12-1.fna.fbcdn.net/v/t1.0-9/23131599_1955400104708365_2434033805173118924_n.jpg?_nc_cat=110&cb=846ca55b-ee17756f&ccb=2&_nc_sid=09cbfe&_nc_ohc=VqjoWd7eVaAAX9MzSf4&_nc_ht=scontent.feze12-1.fna&oh=e9064a897014a942559e11e934fc4a31&oe=5FCB1A1B')
    .setTimestamp()
    .setThumbnail('https://scontent.feze12-1.fna.fbcdn.net/v/t1.0-9/23131599_1955400104708365_2434033805173118924_n.jpg?_nc_cat=110&cb=846ca55b-ee17756f&ccb=2&_nc_sid=09cbfe&_nc_ohc=VqjoWd7eVaAAX9MzSf4&_nc_ht=scontent.feze12-1.fna&oh=e9064a897014a942559e11e934fc4a31&oe=5FCB1A1B')
    //NOMBRE DEL BOT: client.user.username
    //AVALAR DE BOT: client.user.avatarURL()
    //NOMBRE DE USUARIO: message.member.displayName
    //AVATAR DE USUARIO: message.author.avatarURL()
    message.channel.send("Mira ta re cagoneado")
  message.channel.send(embed);
 
}

if(command === 'status'){
 const embed = new Discord.MessageEmbed()
    .setTitle('Esta es la información actual del servidor')
    
    .setColor("RANDOM")
    
    .setTimestamp()

    .setThumbnail('https://cdn.discordapp.com/attachments/713810874607075329/775045042598314004/tenor.gif')

    .setDescription("Toda la **INFORMACIÓN** detallada del servidor")
    
    .setFooter("solicitado por: " +message.member.displayName, message.author.avatarURL())  

    .setAuthor(message.guild.name)

    .addField("ID",message.guild.id, true)

    .addField("Region", message.guild.region)

    .addField('Creado el', message.guild.joinedAt.toDateString(), true)

    .addField("Dueño del servidor","LAUT1KK#0001")

    .addField("Miembros", message.guild.memberCount)

    .addField("Roles", message.guild.roles.sizte, true)

    .setImage("https://cdn.discordapp.com/attachments/713810874607075329/775045042598314004/tenor.gif")


  message.channel.send(embed);
 
 
}
});





client.login(config.token);