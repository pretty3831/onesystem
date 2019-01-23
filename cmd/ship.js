module.exports = (msg, content, discord) => {
  const shipconfig = require('./shipconfig.json');
  var names = [content.args[1], content.args[2]];
  var embedcontent = {
    color: "",
    description: "",
    title: "Ship",
    channel: "main"
  }
  if (names.includes(undefined)) {
    embedcontent.description = ":x: Ik heb 2 namen nodig om te koppelen"
    embedcontent.title = "Error"
    embedcontent.color = content.color.orange
    require("./richembed.js")(embedcontent, msg, discord);
  } else {
    var procent = 0
    for (var i = 0; i < names.length; i++) {
      procent += ship(names[i]);
      if (i === 0 && shipconfig.couples.includes(names[i]) && shipconfig.couples.includes(names[i++])) {
        procent = 12
      }
    }
    var status = shipconfig.text[Math.floor(procent / 12 * 10)];
    embedcontent.title = "Ship";
    embedcontent.description = `${names[0].toUpperCase()} :heart: ${names[1].toUpperCase()}\n\n**Procent :** ${Math.floor(procent / 12 * 100)}%\n**Status   :** ${status}`
    embedcontent.color = content.color.green
    require("./richembed.js")(embedcontent, msg, discord);
  }

  function ship(name, procent) {
    var lovecount = 0
    name = name.toLowerCase();
    name = name.split("");
    var args = ["s", "a", "d", "w", "e", "i", "r", "t", "u", "y", "l", "o", "m", "h", "g"];
    for (var i = 0; i < name.length; i++) {
      if (args.includes(name[i])) {
        lovecount++
      }
    }
    return lovecount
  }
}
