// create web server
// server.js

const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const server = http.createServer((req, res) => {
    let requestUrl = url.parse(req.url);
    let pathName = requestUrl.pathname;
    console.log(pathName);
    let filePath = path.join(__dirname, pathName);

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});

// Run this code by running node server.js in the terminal. 
// This will start the server and you can access the html file by visiting http://localhost:3000 in the browser. 
// The server will read the html file and serve it as a response.

// Now, let’s create the html file that we want to serve. 
// Create a file named index.html in the project folder and add the following code: