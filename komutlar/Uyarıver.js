const Discord = require('discord.js');
exports.execute = async (client, message, args) => {

if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(`Bu Komutu Kullana Bilmek İçin  \`Mesajları Yönet\` Yetkisine Sahip Olmalısın!`);
var kisi = message.mentions.members.first();
if (!member) return message.channel.send('Lütfen bir kullanıcıyı etiketleyin veya ismini yazın.');

  try{
 kisi.roles.remove('ROL-İD') // Rol Alma
 kisi.roles.add('ROL-İD') // Rol Verme

const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setTitle("İşlem Başarılı")
.setDescription(`${kisi} Adlı üyeye  Rolünü verdim veya  Aldım`)
.setFooter("alt metin")
 message.channel.send(embed);

  } catch (e) {
    console.log(e);
    message.channel.send('Hata oluştu!');
  }

};
exports.conf = {
  command: "uyarıver",
  description: "",
  aliases: ["uyarı-ver"]
}
