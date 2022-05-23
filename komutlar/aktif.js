const Discord = require('discord.js');
exports.run = function(client, message, args) {

  const embed = new Discord.RichEmbed()
  .setColor("BLACK")
  .setTitle('MG ROLEPLAY AKTİF')
  .setDescription('Sunucumuz şu anda aktiftir. Giriş Yapabilirsiniz herhangi bir sorunla karşılaşırsanız eğer desteğe gelip yönetim ekibimiz ile iletişime geçebilirsiniz')
  .addField(`Sunucu Ip Adresimiz`,`45.147.45.154`, true)
  .addField(`TeamSpeak 3 Adresimiz`,`mg` , true)
  .setImage('https://cdn.discordapp.com/attachments/974714547963306036/975125062745219132/standard.gif')
  message.channel.send('||@everyone|| ||@here||',{embed});
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["online",],
  permLevel: 2,
  kategori:"genel"
};

exports.help = {
  name: 'aktif',
  description: 'Sunucu Aktifse Atılacak Komut',
  usage: '+aktif'
};