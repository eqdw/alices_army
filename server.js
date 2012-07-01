var HTTP = require("http");
var URL  = require('url');

var private = {};

var onRequest = function(request, response){
  var url = URL.parse(request.url);
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello, World!");
  response.write("Path: " + url.path);
  response.end();
};
private.onRequest = onRequest;

var start = function(){
  HTTP.createServer(onRequest).listen(8888);
  console.log("Server has started.");
};

exports.start   = start;
exports.private = private;
