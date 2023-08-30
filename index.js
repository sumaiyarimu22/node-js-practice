/* Title: Uptime monitoring application
Description: A restfull API to monitor up or down time of user defined links */

//dependencis
const http = require("http");
const url = require("url");

//app object - module scaffolding
const app = {};

//configuration
app.config = {
  port: 3000,
};

//create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening to port ${app.config.port}`);
  });
};

//handle Request response
app.handleReqRes = (req, res) => {
  //request handling
  //get the url and parse it
  const parseUrl = url.parse(req.url, true);
  const path = parseUrl.pathname;
  const trimedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parseUrl.query;

  console.log(queryStringObject);
  //response handle
  res.end("hello programer");
};

//start the server
app.createServer();
