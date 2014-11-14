if (!process.env.HOST) {
  console.error('missing HOST');
  process.exit(1);
}
var Primus = require('primus');
var socket = new Primus.createSocket();
var client = socket(process.env.HOST);
var count= 0;

client.on('data', function(data) {
  console.log(new Date(), 'data received. count:', count++);
});