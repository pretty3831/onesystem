module.exports = (msg, content, discord) => {
  var help = [
    ["**<Fun>**", ""],
    ["info", "<member>"],
    ["serverinfo", ""],
    ["ping", ""],
    ["count", ""],
    ["8ball", "<text>"],
    ["ship", "<naam> <naam>"],
    //["fortnite", "<naam> <platform>"],
    ["**<Mod>**", ""],
    ["purge", "<1 t/m 100>"],
    ["warn", "<member> <reason>"],
    ["warnlog", "<member>"],
    ["kick", "<member <reason>"],
    ["ban", "<member> <reason>"]
  ]
  var output = []
  var str
  for (var i = 0; i < help.length; i++) {
    if (help[i][0].startsWith("*")) {
      str = `\n${help[i][0]}`;
    } else {
      str = `${content.prefix}${help[i][0]} ${help[i][1]}`;
    }
    output.push(str);
  }

  var embedcontent = {
    description: output.join("\n"),
    title: "Help",
    color: content.color.green,
    channel: "main"
  }
  require("./richembed.js")(embedcontent, msg, discord);
}
