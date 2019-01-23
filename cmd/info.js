module.exports = (msg, content, discord) => {
  var member = msg.mentions.members.first()
  var embedcontent = {
    color: content.color.green,
    description: "",
    title: "Info",
    channel: "main",
    thumbnail: ""
  }

  if (!member) {
    embedcontent.thumbnail = `${msg.author.avatarURL}`
    embedcontent.description = `**Username**\n${msg.author.username}\n**Tag**\n${msg.author.tag}\n**Discrim**\n${msg.author.discriminator}\n**Created**\n${msg.author.createdAt}`
  } else {
    embedcontent.thumbnail = `${member.user.avatarURL}`
    embedcontent.description = `**Username**\n${member.user.username}\n**Tag**\n${member.user.tag}\n**Discrim**\n${member.user.discriminator}\n**Created**\n${member.user.createdAt}`
  }

  require("./richembed.js")(embedcontent, msg, discord);
}
