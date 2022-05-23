const Discord = require('discord.js');
exports.run = function(client, message, args) {

  const embed = new Discord.RichEmbed()
  .setColor("BLACK")
  .setTitle('MG ROLEPLAY RESTART')
  .setDescription('Sunucumuza şu anda ufak bir restart atacaktır lütfen sunucudan çıkış yapınız ve giriş yapmayı da denemeyiniz aktif olduğunda yetkililer tarafında aktif komutu atılacaktır')
  .setImage('https://cdn.discordapp.com/attachments/974714547963306036/975125062745219132/standard.gif')

  message.channel.send('||@everyone|| ||@here||',{embed});
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["res",],
  permLevel: 2,
  kategori:"genel"
};

exports.help = {
  name: 'restart',
  description: 'Sunucu Restart Atılacak Komut',
  usage: '+restart'
};