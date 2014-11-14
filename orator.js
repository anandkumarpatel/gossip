var http = require('http');
var server = http.createServer();

var Primus = require('primus');
primus = new Primus(server, {
  transformer: 'websockets'
});

var speach = '';
for(var i = 1; i <= 16384; i++) {
  speach += String.fromCharCode(i);
}

var count = 0;

primus.on('connection', startTalking);

function startTalking(socket) {
  console.log("client has connected");
  talk(socket)();
}
function talk(socket) {
  return function () {
    console.log(new Date(), 'sent data count:', count++);
    socket.write(speach);
    setTimeout(talk(socket), process.env.TALK_DELAY_MS || 1000);
  };
}

server.listen(process.env.PORT || '8080');
console.log('listening on', process.env.PORT || 8080, 'data rate', process.env.TALK_DELAY_MS || 1000);