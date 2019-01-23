module.exports = (msg, content, discord) => {
  var embedcontent = {
    channel: "main",
    description: ":x: Ik kan geen <index> vinden.\n\n:arrow_forward: ?warnremove <index>",
    title: "Error",
    color: content.color.orange
  }
  var count = parseInt(content.args[2])
  var member = msg.mentions.members.first();
  if (!member) {
    embedcontent.description = ":x: Ik kan geen member vinden!\n\n:arrow_forward: ?warnremove @<member> <index>"
    require("./richembed.js")(embedcontent, msg, discord);
  } else if (!content.args[1].startsWith("<@")) {
    embedcontent.description = ":x: Ik kan geen member vinden!\n\n:arrow_forward: ?warnremove @<member> <index>"
    require("./richembed.js")(embedcontent, msg, discord);
  } else {
    var warns = content.collection.get(`warns_${member.user.id}`);
    if (count == undefined || warns[count] == undefined) return require("./richembed.js")(embedcontent, msg, discord);
    embedcontent.description = `**Index**\n${count}\n**Member**\n${member.user.tag}\n**Reden**\n${warns[count][0]}`
    embedcontent.title = "WarnRemove"
    embedcontent.color = content.color.green
    require("./richembed.js")(embedcontent, msg, discord);
    embedcontent.channel = "mod-log"
    require("./richembed.js")(embedcontent, msg, discord);
    warns.splice(count, 1);
    content.collection.set(`warns_${member.user.id}`, warns);
  }
}
