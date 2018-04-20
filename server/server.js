//szerver
var ws = require('ws');

var wss = new ws.Server({port: 12345, host: '127.0.0.1'});

var entities = [
    {x: 30, y:20}
];

wss.on('connection', function (connection) {
   console.log('valaki belépett!');

   connection.on('close', function () {
       console.log('valaki kilépett!');
   });

   connection.on('message', function (message) {
       console.log('üzenet: ' + message);
   });

   connection.send(JSON.stringify(entities));

   //connection.send('szia!');
});
