//*******************************
// REDIRECTION
const http = require('http');

const serverRedirection = http.createServer((req, res) => {
    res.writeHead(301,{Location: `https://${req.headers.host.replace("8080", "8443")}${req.url}`});
    res.end();
});


//*******************************
// SERVER HTTPS
const https = require('https');
const app = require('./app');
const fs = require("fs");

const normalizePort = val => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};
const port = normalizePort(process.env.PORT || '8443');
app.set('port', port);

const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const server = https.createServer(
    {
        key: fs.readFileSync("cert/key.pem", "utf8"),
        cert: fs.readFileSync("cert/cert.pem", "utf8"),
    },
    app
);


//*******************************
// Listen

server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('Listening on ' + bind);
});

server.listen(port);


serverRedirection.on('error', errorHandler);
serverRedirection.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + 8080;
    console.log('Listening on ' + bind);
});
serverRedirection.listen(8080);