module.exports = (msg, content, discord) => {
  msg.channel.send(":question:ping:question:").then(m => {
    var pingpong = m.createdTimestamp - msg.createdTimestamp
    m.delete();
    var embedcontent = {
      channel: "main",
      title: "Ping",
      description: `:stopwatch: ${pingpong}ms`,
      color: content.color.green
    };
    require("./richembed.js")(embedcontent, msg, discord);
  });
}
