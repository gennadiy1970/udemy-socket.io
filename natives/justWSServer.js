const http = require('http');
const websocket = require('ws');
const hostname = '127.0.0.1';
const port = process.env.PORT || 4001;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    res.end('I am connected!');
});

const wss = new websocket.Server({server});

// wss.on('headers', (headers, req) => {
//     console.log(headers);
// });



wss.on('connection', (ws, req) => {
    ws.send('Wellcome to the websoket server!!')
    ws.on('message', msg => {
        console.log(msg.toString());
    })
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });