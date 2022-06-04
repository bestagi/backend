const http = require("http");

const requestListener = (request, respond) => {
    respond.setHeader("Content-Type", "text/html");
    respond.statusCode = 200;
    respond.end("<h1>Halo HTTP Server!</h1>");
};

const server = http.createServer(requestListener);
const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});