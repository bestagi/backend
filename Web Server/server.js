const http = require("http");

const requestListener = (request, respond) => {
    respond.setHeader("Content-Type", "text/html");
    respond.statusCode = 200;
    const {method} = request;

    if(method === "GET") {
        respond.end("<h1>Res GET!</h1>");
    }

    if(method === "POST") {
        respond.end("<h1>Res POST!</h1>");
    }

    if(method === "PUT") {
        respond.end("<h1>Res PUT</h1>");
    }

    if(method === "DELETE") {
        respond.end("<h1>Res DELETE!</h1>");
    }
};

const server = http.createServer(requestListener);
const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});