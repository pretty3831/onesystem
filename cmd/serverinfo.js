module.exports = (msg, content, discord) => {
  var embedcontent = {
    color: content.color.green,
    description: `**Channels**\n${msg.guild.channels.size}\n**Members**\n${msg.guild.members.size}\n**Owner**\n${msg.guild.owner.user.username}\n**ID**\n${msg.guild.id}`,
    title: "serverinfo",
    channel: "main",
    thumbnail: `${msg.guild.iconURL}`
  };
  require("./richembed.js")(embedcontent, msg, discord);
}
