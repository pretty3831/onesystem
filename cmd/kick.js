module.exports = (msg, content, discord) => {
  var member = msg.mentions.members.first();
  var embedcontent = {
    channel: "main",
    description: "",
    title: "Error",
    color: content.color.orange
  }
  var reason = "reden onbekend"
  var args = content.args.splice(2);
  args = args.join(" ");
  if (!member) {
    embedcontent.description = ":x: Ik kan geen member vinden!\n\n:arrow_forward: ?kick @<member> <reden>"
    require("./richembed.js")(embedcontent, msg, discord);
  } else if (!content.args[1].startsWith("<@")) {
    embedcontent.description = ":x: Ik kan geen member vinden!\n\n:arrow_forward: ?kick @<member> <reden>"
    require("./richembed.js")(embedcontent, msg, discord);
  } else if (!member.kickable) {
    embedcontent.description = ":x: Ik kan die member niet kicken!"
    require("./richembed.js")(embedcontent, msg, discord);
  } else {
    if (args[2]) reason = args;
    embedcontent.title = "Kick"
    embedcontent.color = content.color.red
    embedcontent.description = `**Kicked\n**${member.user.tag}**\nDoor\n**${msg.author.tag}**\nReden\n**${args}**\nTime\n**${msg.createdAt}`
    require("./richembed.js")(embedcontent, msg, discord);
    embedcontent.channel = "mod-log"
    require("./richembed.js")(embedcontent, msg, discord);
    member.kick(`${reason}`);
  }
}
