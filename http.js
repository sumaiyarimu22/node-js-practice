const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello programmer!");
    res.write("how are you?");
    res.end();
  } else if (req.url === "/about") {
    res.write("This is about us page");
    res.end();
  } else {
    res.write("Not found");
    res.end();
  }
});

// server.on("connection", () => {
//   console.log("New connection..");
// });

server.listen(3000);
console.log("listing on post 3000");
