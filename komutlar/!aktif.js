const Discord = require("discord.js");

exports.execute = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(`Bu Komutu Kullana Bilmek İçin  \`Mesajları Yönet\` Yetkisine Sahip Olmalısın!`);



    const embed = new Discord.MessageEmbed()
    .setTitle("Sunucu Aktif")
    .setDescription("Sunucumuz aktif")
    .setThumbnail(client.user.avatarURL())
    .addField("ip adresi", "xxx") // bunu istersen Description'a yaz istersen bunu kopyala bir tane daha koy ts ip'si yaz
    .addField("TS3 İP", "xxx")
    .setImage("foto linki koy knks")
    .setTimestamp();
    message.channel.send("@everyone" + embed)


}
exports.conf = {
  command: "aktif",
  description: "",
  aliases: ["swaktif"]
};
