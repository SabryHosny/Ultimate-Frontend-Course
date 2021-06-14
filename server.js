var StaticServer = require("static-server");

var server = new StaticServer({
  rootPath: "./dist/",
  port: 8000,
});

server.start(function () {
  console.log(`Hi Sabry! Your Server Started At Port: ${server.port}`);
});
