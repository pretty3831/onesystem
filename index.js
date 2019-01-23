const discord = require('discord.js');
const client = new discord.Client();
const color = require('colors');
const enmap = require('enmap');
const enmaplevel = require('enmap-level');
const collection = new enmap({
  provider: new enmaplevel({
    name: "coll"
  })
});

client.on("ready", () => {
  console.log("online".green.bold);
  client.user.setActivity("Gameplayz | ?help")
});

client.on("message", msg => {
  if (msg.channel.type === `dm`) return;
  //variables
  var prefix = "?";
  var staff = msg.guild.roles.find("id","433198762706599936");
  console.log(staff);
  
  //gate
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  //gate

  var args = msg.content.split(" ");
  var cmd = args[0].toLowerCase();
  cmd = cmd.split("").slice(1);
  cmd = cmd.join("");

  var content = {
    collection: collection,
    prefix: prefix,
    args: args,
    cmd: cmd,
    color: {
      red: 0xd62417,
      green: 0x13ce26,
      orange: 0xf48428
    }
  };

  if (cmd == "help" || cmd == "h") {
    require('./cmd/help.js')(msg, content, discord);
  }
  if (cmd == "info" || cmd == "i") {
    require('./cmd/info.js')(msg, content, discord);
  }
  if (cmd == "serverinfo" || cmd == "sinfo") {
    require("./cmd/serverinfo.js")(msg, content, discord);
  }
  if (cmd == "8ball" || cmd == "8b") {
    require("./cmd/8ball.js")(msg, content, discord);
  }
  if (cmd == "ping") {
    require("./cmd/ping.js")(msg, content, discord);
  }
  if (cmd == "count") {
    require("./cmd/count.js")(msg, content, discord);
  }
  if (cmd == "ship") {
    require("./cmd/ship.js")(msg, content, discord);
  }
  //henk
  if (cmd == "warn" || cmd == "w") {
    if(msg.member.roles.has(staff.id)) {
      require("./cmd/warn.js")(msg, content, discord);
    }else{
      return noPerm(msg, discord, content);
    }
  }
  if (cmd == "warnlog" || cmd == "wl" || cmd == "warns") {
    if(msg.member.roles.has(staff.id)) {
      require("./cmd/warnlog.js")(msg, content, discord);
    }else{
      return noPerm(msg, discord, content);
    }
  }
  if (cmd == "warnremove" || cmd == "rwarn") {
    if(msg.member.roles.has(staff.id)) {
      require("./cmd/warnremove.js")(msg, content, discord);
    }else{
      return noPerm(msg, discord, content);
    }
  }
  if (cmd == "ban" || cmd == "b") {
    if(msg.member.roles.has(staff.id)) {
      require("./cmd/ban.js")(msg, content, discord);
    }else{
      return noPerm(msg, discord, content);
    }
  }
  if (cmd == "kick" || cmd == "k") {
    if(msg.member.roles.has(staff.id)) {
      require("./cmd/kick.js")(msg, content, discord);
    }else{
      return noPerm(msg, discord, content);
    }
  }
});

function noPerm(msg, discord, content) {
  var embedcontent = {
    description: ":x: Je rank is niet hoog genoeg.",
    title: "Error",
    color: content.color.orange,
    channel: "main"
  };
  require("./cmd/richembed.js")(embedcontent, msg, discord);
}


client.on("guildMemberAdd", member =>{
  member.addRole(member.guild.roles.find("name","🌍 Member"));
  var embed = new discord.RichEmbed()
    .setColor(0x13ce26)
    .setTitle("Welcome")
    .setDescription(`Welkom **${member.user.username}** \nEr zijn nu **${member.guild.members.size}** members`);

  member.guild.channels.find("id","433198762706599936").send({embed})
});

//----------------------------------------------//
client.on("guildMemberRemove", member =>{
  var channel = member.guild.channels.find("id","433198762706599936")
  var embed = new discord.RichEmbed()
    .setColor(0xf48428)
    .setTitle("Leave")
    .setDescription(`Bye **${member.user.username}** \nEr zijn nog **${member.guild.members.size}** over`);

  channel.send({embed})

});

client.login("NTM3NzIwMTAwMjc5NjgxMDI0.DypWYw.9-_bMpVxseYKqTzQqujmu2nP1yE");
