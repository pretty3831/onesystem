module.exports = (msg, content, discord) => {
  var fortunes = [
    ":white_check_mark: **Het is zeker**",
    ":white_check_mark: **Het is zo beslist**",
    ":white_check_mark: **Zonder twijfel**",
    ":white_check_mark: **Zeker weten**",
    ":white_check_mark: **Je kunt erop vertrouwen**",
    ":white_check_mark: **Volgens mij wel**",
    ":white_check_mark: **Zeer waarschijnlijk**",
    ":white_check_mark: **Goed vooruitzicht**",
    ":white_check_mark: **Ja**",
    ":white_check_mark: **De wijzer wijst naar ja**",
    ":question: **Reactie is wazig, probeer opnieuw**",
    ":question: **Vraag later opnieuw**",
    ":question: **Niet te voorspellen**",
    ":x: **Reken er niet op**",
    ":x: **Mijn antwoord is nee**",
    ":x: **Mijn bronnen zeggen nee**",
    ":x: **Vooruitzicht is niet zo goed**",
    ":x: **Zeer twijfelachtig**"
  ]
  var embedcontent = {}
  if (content.args[1] == undefined) {
    embedcontent = {
      color: content.color.orange,
      description: ":x: Geen vraag gevonden.",
      title: "Error",
      channel: "main"
    };
  } else {
    embedcontent = {
      color: content.color.green,
      description: `:8ball:**${msg.author.username}** vroeg: **${content.args.slice(1).join(" ")}**\n\n${fortunes[Math.floor(Math.random() * fortunes.length)]}`,
      title: "8ball",
      channel: "main"
    };
  }
  require("./richembed.js")(embedcontent, msg, discord);
}
