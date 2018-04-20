//szerver
var ws = require('ws');

var wss = new ws.Server({port: 12345, host: '127.0.0.1'});

var entities = [
    {x: 30, y:20}
];

var connections = new Set();

wss.on('connection', function (connection) {
   console.log('valaki belépett!');
   connections.add(connection);
   connections.keys = "";

   connection.on('close', function () {
       console.log('valaki kilépett!');
       connections.delete(connection);
   });

   connection.on('message', function (message) {
       console.log('üzenet: ' + message);
       connection.keys=message;
   });

   setInterval(function(){
       connections.forEach(function(connection){
            connection.send(JSON.stringify(entities));
       });
       //console.log("elküldve");
   }, 100);

   //connection.send('szia!');
});

setInterval(function(){
    connections.forEach(function(connection){
        var message=
    });
});

