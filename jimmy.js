const Discord = require("discord.js");
const cliente = new Discord.Client();
const configuracion = require("./config.json");

let prefijo = configuracion.prefijo;

cliente.on("ready", () => {
    console.log("Conectado correctamente");
    cliente.user.setPresence({
        status: "dnd",
        activity: {
            name: "Muerte y destrucción",
            url: "https://www.twitch.tv/dashducks",
            type: "STREAMING"
        }
    });
});

cliente.on('message', (message) => {

    if (!message.content.startsWith(prefijo)) return;

    if (message.author.bot) return;
    //message.channel.send("fui yo")
    const args = message.content.slice(configuracion.prefijo.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    switch (command){
        case "cave": 
            message.channel.send('ese gordo hijo de puta me la debe');
            break;
        case "contame": 
            message.channel.send('me lavo la cara cada vez que me levanto a la mañana :)');
            break;
        case "erick":
            message.channel.send('me va a matar si hablo de el')
            break;
        case "hola":
            message.channel.send('no puedo saludar a la gente');
            break;
        case "jimmy":
            message.channel.send("no digas mi nombre");
            break;
            case "silvio":
                message.channel.send("calvo hijo de puta");
            break;
        case "sorprendeme":
            message.channel.send(
                {
                    embed: 
                    {
                        color: 3476403,
                        author: {
                            name: cliente.user.username,
                            icon_url: cliente.user.avatarURL()
                        },
                        title: "Cuando fui a filipinas :)",
                        image: {
                            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbmB-iuoxqhloc-U9iRlt-bpMWQb-WeNO6Dw&usqp=CAU',
                        }
                    }
                }
            );
            break;
        case "p":
            let canalvoz = message.member.voice.channel;

            if(!canalvoz) {
                message.channel.send('No estas conectado a un canal de voz.');
            
            } else {
                message.channel.send('Dejando el canal de voz.').then(() => {
                    canalvoz.leave();
            
                }).catch(error => console.log(error));
            
            } 
        break;
    }
  
})

cliente.login(configuracion.token);