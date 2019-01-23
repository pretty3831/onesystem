module.exports = (msg, content, discord) => {
  var member = msg.mentions.members.first();
  var embedcontent = {
    channel: "main",
    description: "",
    title: "Error",
    color: content.color.orange
  }
  var reason = "Reden onbekend"
  var args = content.args.splice(2);
  args = args.join(" ");
  if (!member) {
    embedcontent.description = ":x: Ik kan geen member vinden!\n\n:arrow_forward: ?warn @<member> <reden>"
    require("./richembed.js")(embedcontent, msg, discord);
  } else {
    if (!content.args[1].startsWith("<@")) {
      embedcontent.description = ":x: Ik kan geen member vinden!\n\n:arrow_forward: ?warn @<member> <reden>"
      require("./richembed.js")(embedcontent, msg, discord);
    } else {
      if (args[2]) reason = args;
      var warns = content.collection.get(`warns_${member.user.id}`);
      if (warns == null) warns = []
      var warn = [
        args,
        member.user.tag,
        msg.author.tag,
        msg.createdAt
      ]
      warns.push(warn);
      content.collection.set(`warns_${member.user.id}`, warns);
      embedcontent.title = "Warn"
      embedcontent.channel = "mod-log"
      embedcontent.description = `**Warned\n**${member.user.tag}**\nDoor\n**${msg.author.tag}**\nReden\n**${args}**\nTime\n**${msg.createdAt}`
      embedcontent.color = content.color.red
      require("./richembed.js")(embedcontent, msg, discord);
      embedcontent.channel = "main"
      require("./richembed.js")(embedcontent, msg, discord);
    }
  }
}
