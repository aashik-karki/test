const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("welcome to home page");
    res.end();
  }
  if (req.url == "/about") {
    res.write("this is a about page");
    res.end();
  } else res.end("<h1>oops! page not found</h1>");
});

server.listen(5000);
