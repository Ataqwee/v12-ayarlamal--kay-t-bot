const Discord = require("discord.js")

exports.execute = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(`Bu Komutu Kullana Bilmek İçin  \`Mesajları Yönet\` Yetkisine Sahip Olmalısın!`);



    const embed = new Discord.MessageEmbed()
    .setTitle("Sunucu Bakımda")
    .setDescription("Bakım Zamanı!")
    .setThumbnail(client.user.avatarURL())
    .setImage("foto linki koy knks")
    .setTimestamp();
    message.channel.send("@everyone" + embed)


}
exports.conf = {
  description: "",
  aliases: ["swbakımda"],
  command: "bakım"

};
