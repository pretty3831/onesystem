module.exports = (embedcontent, msg, discord) => {

  var embed = new discord.RichEmbed()
    .setDescription(embedcontent.description)
    .setTitle(embedcontent.title)
    .setColor(embedcontent.color)
    .setFooter(`-${msg.author.username}`)
    .setTimestamp();

  if (embedcontent.thumbnail != undefined) {
    embed.setThumbnail(embedcontent.thumbnail);
  }

  if (embedcontent.channel != "main") {
    msg.guild.channels.find("name", `${embedcontent.channel}`).send(embed);
  } else {
    msg.channel.send(embed);
  }
}
