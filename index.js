/**
 * Required dependencies
 */
const http = require('http');
const fs = require('fs');
const mime = require('mime-types');

/**
 * Handle interactions between server and users
 * @param {http.IncomingMessage} req User's message to server
 * @param {http.ServerResponse} res Server's response to user
 */
const app = function(req, res) {
    // console.log(req.url);
    if(req.url == '/') {
        writeHTML(res, 'public/index.html');
    }
    else if( fs.existsSync('public' + req.url) ) {
        const contentType = mime.lookup(req.url);
        // console.log(contentType);
        if(contentType == 'text/html') {
            writeHTML(res, 'public' + req.url);
        }
        else {
            res.writeHead(200, {'Content-Type': contentType});
            res.write( fs.readFileSync('public' + req.url) );
        }
    }
    else if(req.url == '/page-not-found') {
        writeHTML(res, 'public/404.html');
    }
    else {
        res.write('<script> location.href = "/page-not-found" </script>')
    }
    res.end();
};

/**
 * Port number for server to run
 */
const port = process.env.PORT || 3000;

/**
 * Server for our website
 */
const server = http.createServer(app);
server.listen(port);

/**
 * Send html page repsonse to user
 * @param {http.ServerResponse} res Response to user
 * @param {string} filepath Path to file
 */
function writeHTML(res, filepath) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write( fs.readFileSync('public/templates/head.html') );
    res.write( fs.readFileSync(filepath) );
    res.write( fs.readFileSync('public/templates/foot.html') );
}