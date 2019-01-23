module.exports = (msg, content, discord) => {
  var embedcontent = {
    color: content.color.green,
    description: `**Members**\n${msg.guild.members.size}`,
    title: "Count",
    channel: "main"
  };
  require("./richembed.js")(embedcontent, msg, discord);
}
