var SimplePeer 		= require('simple-peer');
var wrtc 			= require('wrtc');

console.log("running");
var socket 	= null;
var peer 	= new SimplePeer({ initiator: false, wrtc: wrtc });
/*var token 	= "";
 
peer.on('error', function (err) { console.log('error', err) })

peer.on('signal', function (data) 
{
	socket.send(JSON.stringify(data));
	console.log("Generating token. Sending to user.");
  //peerToken = JSON.stringify(data);
})
*/

/*
document.querySelector('form').addEventListener('submit', function (ev) {
  ev.preventDefault()
  p.signal(JSON.parse(document.querySelector('#incoming').value))
})
*/
/*
peer.on('connect', function () {
  console.log('CONNECT')
  peer.send('whatever' + Math.random())
})

peer.on('data', function (data) {
  console.log('data: ' + data)
})
*/


// ---------------------- init server ----------------------------------
/*
var port                = process.env.PORT || 5000;
var http                = require('http');
var WebSocketServer     = require('websocket').server;

// create http server
var server = http.createServer(function(request, response) {
	response.writeHead(200);
	response.end("Server: online.");
});

server.listen(port, function() {
	console.log("Server Started: " + new Date());
});

// create websocket server connection.
wsServer = new WebSocketServer({
	httpServer: server
});


// TODO: add check for request origin for when published.
wsServer.on('request', function(request)
{
	console.log("socket connected.");
	socket = request.accept(null, request.origin);
	socket.on('message', function(message) {
		
		//peer.signal(message.utf8Data);
		//console.log();
	});
});
*/
