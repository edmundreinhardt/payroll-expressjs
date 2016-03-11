
/**
 * Generated Node.js application that can run on IBM i
 */

/*eslint-env node */
var http = require("http");

var appport = 8888;

http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Generated Node.js application that runs on IBM i");        
    response.end();	

}).listen(appport);
