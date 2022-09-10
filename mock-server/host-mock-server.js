var http = require('http');
var mockserver = require('mockserver');
 
http.createServer(mockserver('mock-server')).listen(5000);