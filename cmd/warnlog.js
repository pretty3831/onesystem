module.exports = (msg, content, discord) => {
  var embedcontent = {
    channel: "main",
    description: "",
    title: "Error",
    color: content.color.orange
  }
  var member = msg.mentions.members.first();
  if (!member) {
    embedcontent.description = ":x: Ik kan geen member vinden!\n\n:arrow_forward: ?warnlog @<member>"
    require("./richembed.js")(embedcontent, msg, discord);
  } else if (!content.args[1].startsWith("<@")) {
    embedcontent.description = ":x: Ik kan geen member vinden!\n\n:arrow_forward: ?warnlog @<member>"
    require("./richembed.js")(embedcontent, msg, discord);
  } else {
    var warns = content.collection.get(`warns_${member.user.id}`);
    if (warns == null || `${warns}` == "") {
      embedcontent.description = ":x: Deze member heeft nog geen warns."
      return require("./richembed.js")(embedcontent, msg, discord);
    } else {
      var arr = []
      var str = ""
      for (var i = 0; i < warns.length; i++) {
        str = `**${i}**\n**Door :**${warns[i][2]}\n**Reden :**${warns[i][0]}\n\n`
        arr.push(str);
      }
      embedcontent.description = `**Warns**\n\n${arr.join("")}`
      embedcontent.color = content.color.green
      embedcontent.title = "Warnlog"
      require("./richembed.js")(embedcontent, msg, discord);
    }
  }
}
